import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "dalldyshjaa",
    profile:
      "https://images.pexels.com/photos/12791096/pexels-photo-12791096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });
  return (
    <>
      <Header user={user} />
      <main>
        <Routes>
          <Route path="/home" element={<Header user={user} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
