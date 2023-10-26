import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal="Dog" name="Kitsune" breed="Husky" />
      <Pet animal="Cat" name="Fern" breed="American Shorthair" />
      <Pet animal="Axolotl" name="Potato" breed="Leucistic" />
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
