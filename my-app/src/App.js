import "./App.css";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

// JSX : Javascript XML
// ES6

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2></Card2>
        <Card2 secondary></Card2>
      </CardList>
    </div>
  );
}
// Rendering List
// Props = Properties

export default App;
