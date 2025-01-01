let root;
const getRoot = () => root;
const setRoot = (newRoot) => {
  root = newRoot;
};

let elementTree;
const getElementTree = () => elementTree;
const setElementTree = (newElementTree) => {
  elementTree = newElementTree;
};

const state = {
  href: window.location.href,
};
const subscribers = {};
const globalState = {
  get(key) {
    return key ? state[key] : undefined;
  },

  set(key, newValue) {
    if (state[key] !== newValue) {
      state[key] = newValue;
      this.notifySubscribers(key, newValue);
    }
  },

  subscribe(key, callback) {
    if (!subscribers[key]) {
      subscribers[key] = [];
    }
    subscribers[key].push(callback);

    return () => {
      if (subscribers[key]) {
        subscribers[key] = subscribers[key].filter((cb) => cb !== callback);
      }
    };
  },

  notifySubscribers(key, newValue) {
    if (subscribers[key]) {
      subscribers[key].forEach((callback) => callback(newValue));
    }
  },
};

export { getRoot, setRoot, getElementTree, setElementTree, globalState };
