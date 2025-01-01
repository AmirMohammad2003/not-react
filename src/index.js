import { render } from "../not-react/globalFunctions.js";
import App from "./app.js";

const root = document.getElementById("root");
const app = new App();

render(root, app);
