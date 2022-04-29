import "./App.css";
import MainDash from "./components/MainDash.jsx/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container__app">
      <div className="container__glass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
