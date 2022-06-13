import logo from "./logo.svg";
import "./App.css";
import { YoutubeData } from "./YoutubeData";

// JSX : Javascript XML
// ES6

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  console.log(YoutubeData);
  return (
    <div className="youtube-list">
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          img={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        ></YoutubeItem>
      ))}
      {/* <YoutubeItem
        img="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        avatar="https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Learn ReactJS From Zero To Hero"
        author="Tran Dang Khoi"
      ></YoutubeItem>
      <YoutubeItem
        img="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        avatar="https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Learn ReactJS From Zero To Hero"
        author="Tran Dang Khoi"
      ></YoutubeItem>
      <YoutubeItem
        img="https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        avatar="https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Learn ReactJS From Zero To Hero"
        author="Tran Dang Khoi"
      ></YoutubeItem>
      <YoutubeItem
        img="https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        avatar="https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Learn ReactJS From Zero To Hero"
        author="Tran Dang Khoi"
      ></YoutubeItem> */}
    </div>
  );
}
// Rendering List
// Props = Properties
function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.img} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="yotube-title">
            {props.title || "This is a youtube video title"}
          </h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
