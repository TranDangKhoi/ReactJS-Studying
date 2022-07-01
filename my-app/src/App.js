import "./App.css";
import YoutubeList from "./components/Youtube/YoutubeList";

// JSX : Javascript XML
// ES6

function App() {
  return (
    <div>
      <YoutubeList>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          neque tempore, laudantium omnis quasi quae in architecto rerum dolorum
          nihil ipsa perspiciatis similique placeat debitis nobis nisi unde non
          reprehenderit?
        </h2>
        {/* children: html, componenet, text, variable */}
      </YoutubeList>
    </div>
  );
}
// Rendering List
// Props = Properties

export default App;
