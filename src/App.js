import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import Users from "./Users";
import User from "./User";
import LazyUser from "./LazyUser";

function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      {/* <User /> */}
      <LazyUser />
    </div>
  );
}

export default App;
