Function.prototype.myThrottle = function(throttleInterval) {
  tooSoon = false;
  return (...args) => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => { tooSoon = false; }, throttleInterval);
      this.apply(this, args);
    }
  }
};

class Neuron {
  fire(boo) {
    console.log(`Firing! ${boo}`);
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
const interval = setInterval(() => {
  neuron.fire("hello");
}, 10);

neuron.fire = neuron.fire.myThrottle(500);