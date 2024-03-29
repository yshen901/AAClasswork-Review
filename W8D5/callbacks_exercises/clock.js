class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds %= 60;

    this.hours += Math.floor(this.seconds / 60);
    this.minutes %= 60;

    this.hours %= 24;

    this.printTime();
  }
}