import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { SingleTweetPage } from "./components/SingleTweetPage";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "tupac",
    profile: "https://i.kym-cdn.com/photos/images/original/002/213/553/ad1.jpg",
  });
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home user={user} />} />
        <Route
          path="/:username/:postId"
          element={<SingleTweetPage user={user} />}
        />
        <Route path="/:username" element={<ProfilePage user={user} />} />
      </Routes>
    </>
  );
}

export default App;
