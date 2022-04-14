import "./styles.css";
import { Button } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar midElement={<Content />} />
    </div>
  );
}
