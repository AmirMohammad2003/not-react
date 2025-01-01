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

let globalState = [];
const getGlobalState = (name) => globalState[name].value;
const setGlobalState = (name, value) => {
  if (globalState[name] === undefined) {
    globalState[name] = {
      value: undefined,
      subscribers: [],
    };
  } else if (globalState[name].value === value) {
    return;
  }
  globalState[name].value = value;
  console.log(name, "changed to", value);
  globalState[name].subscribers.forEach((subscriber) => {
    subscriber(value);
  });
};

globalState.subscribe = (name, callback) => {
  if (globalState[name] === undefined) {
    globalState[name] = {
      value: undefined,
      subscribers: [],
    };
  }
  globalState[name].subscribers.push(callback);
};

export {
  getRoot,
  setRoot,
  getElementTree,
  setElementTree,
  getGlobalState,
  setGlobalState,
  globalState,
};
