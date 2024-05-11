const assert = require('assert');
const howLongUntilLunch = require('..');

function MockDate() {
  this.date = 0;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.milliseconds = 0;
}

Object.assign(MockDate.prototype, {
  getDate() {
    return this.date;
  },
  setDate(date) {
    this.date = date;
  },
  setHours(h) {
    this.hours = h;
  },
  setMinutes(m) {
    this.minutes = m;
  },
  setSeconds(s) {
    this.seconds = s;
  },
  setMilliseconds(ms) {
    this.milliseconds = ms;
  },
  valueOf() {
    return (
      this.milliseconds +
      this.seconds * 1e3 +
      this.minutes * 60 * 1e3 +
      this.hours * 60 * 60 * 1e3 +
      this.date * 24 * 60 * 60 * 1e3
    );
  },
});

const now = new MockDate();
MockDate.now = () => now.valueOf();

global.Date = MockDate;

function test(hours, minutes, seconds, expected) {
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(seconds);

  assert.equal(howLongUntilLunch(...lunchtime), expected);

  // 32:绿色前景色 ,39m:默认前景色
  console.log(`\u001B[32m✓\u001B[39m ${expected}`);
}

let lunchtime = [12, 30];
test(11, 30, 0, '1 hour');
test(10, 30, 0, '2 hours');
test(12, 25, 0, '5 minutes');
test(12, 29, 15, '45 seconds');
test(13, 30, 0, '23 hours');

lunchtime = [11, 0];
test(10, 30, 0, '30 minutes');
