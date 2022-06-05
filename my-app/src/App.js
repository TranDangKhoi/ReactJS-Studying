import logo from "./logo.svg";
import "./App.css";

// JSX : Javascript XML
// ES6

/**
 * element = <div id="root">Hello World</div>
 * element = React.createElement('div', {id: 'root'}, 'Hello World')
 * function createElement(elementType, props, ...children)
 * elementType: 'div', 'p' , 'span'
 * props: những cái attribute của thẻ VD: className,id,href,src,...
 * ...children:
 * element2 = (<div>
 * <span>Hello</span> <span>World</span>
 * </div>)
 * element2 = React.createElement('div',{
 * children:[
 * React.createElement('span', null, 'Hello'),
 * ' ',
 * React.createElement('span',null, 'World')
 * ]
 * })
 */
function Feature() {
  return (
    <div className="feature">
      <h3 className="feature-title">Dinasour</h3>
      <p className="feature-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
        dignissimos fuga neque sunt quis quaerat? Soluta reprehenderit
        voluptates nesciunt aperiam quae maiores harum expedita excepturi
        repellendus, ducimus quas cumque sunt.
      </p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
}

export default App;
