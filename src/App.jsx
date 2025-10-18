import { useState, useEffect } from "react";
import LoginModal from "./components/LogInModal";
import CustomizeModal from "./components/CustomizeModal";
import Navbar from "./components/Navbar";
import "./css/index.css";

function App() {
  const initialNavLinks = [
    { id: "overview", label: "Overview", href: "#overview" },
    { id: "news", label: "News", href: "#news" },
    { id: "story", label: "Story", href: "#story" },
    { id: "world", label: "World", href: "#world" },
    { id: "features", label: "Features", href: "#features" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customUrls, setCustomUrls] = useState({
    logo: "",
    overview: "/overview.png",
  });
  const [navLinks, setNavLinks] = useState(initialNavLinks);

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedLogo = localStorage.getItem("customLogoUrl");
    const storedOverview = localStorage.getItem("customOverviewUrl");

    if (loggedIn) {
      setIsLoggedIn(true);
    }

    const storedLinks = localStorage.getItem("navLinks");
    if (storedLinks) {
      setNavLinks(JSON.parse(storedLinks));
    }

    setCustomUrls({
      logo: storedLogo || "",
      overview: storedOverview || "/overview.png",
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const handleSaveCustomizations = (urls, newLinks) => {
    localStorage.setItem("customLogoUrl", urls.logo);
    localStorage.setItem("customOverviewUrl", urls.overview);
    localStorage.setItem("navLinks", JSON.stringify(newLinks)); 

    setCustomUrls(urls);
    setNavLinks(newLinks);

    setIsCustomizeModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Navbar
        onLoginClick={openLoginModal}
        logoUrl={customUrls.logo}
        isLoggedIn={isLoggedIn}
        onCustomizeClick={() => setIsCustomizeModalOpen(true)} 
        onLogout={handleLogout}
        navLinks={navLinks}
      />
      <section className="lorem flex pt-20 justify-center items-center">
        <img src={customUrls.overview} alt="overview" />
      </section>
      <section className="lorem"></section>
      <section className="lorem"></section>
      <section className="lorem"></section>
      <footer>si</footer>
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <CustomizeModal
        isOpen={isCustomizeModalOpen}
        onClose={() => setIsCustomizeModalOpen(false)}
        onSave={handleSaveCustomizations}
        currentLogoUrl={customUrls.logo}
        currentOverviewUrl={customUrls.overview}
        currentNavLinks={navLinks}
      />
    </>
  );
}

export default App;
