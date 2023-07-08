function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Already running!!");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stop watch is not started!");
    }
    running = false;
    endTime = new Date();
    const second = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += second;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();

sw.start();
sw.stop();

console.log(sw.duration);
