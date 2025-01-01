import { render } from "./globalFunctions.js";
import { setRoot } from "./globalState.js";

setRoot(document.getElementById("root"));

window.onpopstate = function (e) {
  render();
};

render();
