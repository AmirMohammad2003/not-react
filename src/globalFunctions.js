import app from "./app.js";
import { getRoot } from "./globalState.js";
export const render = function () {
  const root = getRoot();
  root.innerHTML = "";
  root.appendChild(app());
};
