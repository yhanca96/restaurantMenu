import "./App.css";
import { menus } from "../data.json";
import Card from "./components/card/card";
function App() {
  return <Card menus={menus} />;
}

export default App;
