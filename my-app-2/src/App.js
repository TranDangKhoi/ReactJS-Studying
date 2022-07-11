import "./App.css";
import CardList from "./components/info-card (tailwindcss)/CardList";
import CardTailwind from "./components/info-card (tailwindcss)/CardTailwind";
// import { GlobalStyles } from "./GlobalStyles";

function App(props) {
  return (
    <div>
      {/* <GlobalStyles></GlobalStyles> */}
      <CardList>
        <CardTailwind></CardTailwind>
        <CardTailwind primary></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
