// HH:MM:SS

class Clock {
  constructor(element, startTimeInSeconds) {
    this.element = element
    this.counter = startTimeInSeconds
    this.startTimeInSeconds = startTimeInSeconds
  }

  render() {
    this.updateElement()
    setTimeout(this.render.bind(this), 1000)
  }

  padDigit(num) {
    if (num < 10) {
      return `0${num}`
    }
    return num
  }

  formatTime() {
    var hour = this.padDigit(Math.floor(this.counter / 3600));
    var min = this.padDigit(Math.floor(this.counter / 60));
    var sec = this.padDigit(Math.floor(this.counter % 60));
    return `${hour}:${min}:${sec}`
  }

  updateElement() {
    this.element.innerText = this.formatTime()
    this.counter++;
  }
}
