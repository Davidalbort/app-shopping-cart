import ReactDom from "react-dom/client"
import { App } from "./App"
import { FilterProvider } from "./context/FilterContext"

ReactDom.createRoot(document.getElementById("app") as HTMLElement).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
