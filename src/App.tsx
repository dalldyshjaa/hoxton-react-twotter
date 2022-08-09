import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { SingleTweetPage } from "./components/SingleTweetPage";

function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "dalldyshjaa",
    profile: "../dalldyshjaa.jpg",
  });
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home user={user} />} />
        <Route
          path="/:username/:postId"
          element={<SingleTweetPage user={user} />}
        />
      </Routes>
    </>
  );
}

export default App;
