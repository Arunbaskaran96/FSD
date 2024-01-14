import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Profile from "./pages/profile/Profile";
import Message from "./pages/message/Message";
import { MantineProvider } from "@mantine/core";
import Createpost from "./components/createpost/Createpost";
import Search from "./pages/search/Search";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/layout" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="message" element={<Message />} />
            <Route path="create" element={<Createpost />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
