import "./App.css";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";

// JSX : Javascript XML
// ES6

function App() {
  return (
    <div>
      <CardList>
        <Card secondary></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}
// Rendering List
// Props = Properties

export default App;
