import { getRoot, setRoot } from "./globalState.js";
import router from "./router/router.js";
import Link from "./router/link.js";
import page1 from "./pages/page1.js";
import page2 from "./pages/page2.js";
export default function app() {
  const render = router({
    "/about/": page1,
    "/me/": page2,
  });
  if (render === undefined) {
    const fr = document.createDocumentFragment();
    fr.appendChild(Link({ href: "/about/", children: "About me" }));
    fr.appendChild(document.createElement("br"));
    fr.appendChild(Link({ href: "/me/", children: "Me" }));
    return fr;
  } else {
    return render();
  }
}
