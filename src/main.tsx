import ReactDom from "react-dom/client";
import { App } from "./App";

ReactDom.createRoot(document.getElementById("app") as HTMLElement).render(
  <App />
);
