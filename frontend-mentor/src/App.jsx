import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <div className="container md:mx-auto h-screen flex flex-col md:flex-row items-center justify-center">
      <Left />
      <Right />
    </div>
  );
}

export default App;
