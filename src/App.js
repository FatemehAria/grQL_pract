import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import Users from "./Users";
import User from "./User";

function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <User />
    </div>
  );
}

export default App;
