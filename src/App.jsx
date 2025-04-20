import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import MainLayout from "./layouts/MainLayout";
import SessionContext from "Contexts/SessionContext";
import * as userService from "dataService/sessionService";
import { jwtDecode } from "jwt-decode";
import ContentManagement from "pages/ContentManagement";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() => {
    return userService.getSessionTokenStorage();
  });

  const signIn = (token) => {
    setSessionToken(token);
    userService.setSessionTokenStorage(token);
  };

  const signOut = () => {
    setSessionToken(null);
    userService.removeSessionTokenStorage();
  };

  return (
    <SessionContext.Provider
      value={{
        signIn,
        signOut,
        username: sessionToken ? jwtDecode(sessionToken).username : null
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/admin-portal" element={<Admin />} />
          <Route path="/content-management-system" element={<ContentManagement/>} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
