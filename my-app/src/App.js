import "./App.css";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import InfoCard from "./components/info-card (tailwindcss)/InfoCard";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};

// JSX : Javascript XML
// ES6

function App() {
  return <InfoCard></InfoCard>;
}
// Rendering List
// Props = Properties

export default App;
