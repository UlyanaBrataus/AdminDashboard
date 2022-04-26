import "./App.css";
import MainDash from "./components/MainDash.jsx/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container__app">
      <div className="container__glass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
