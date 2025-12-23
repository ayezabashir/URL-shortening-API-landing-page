import { useEffect, useState } from "react";
import AdvanceStatics from "../components/AdvanceStatics";
import HeroComponent from "../components/HeroComponent";
import ShortnerForm from "../components/ShortnerForm";
import OldLinks from "../components/OldLinks";

const Home = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const savedLinks = localStorage.getItem("shortLinks");
    if (savedLinks) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLinks(JSON.parse(savedLinks));
    }
  }, []);

  return (
    <>
      <HeroComponent />

      <div className="bg-light-gray relative mt-15">
        <ShortnerForm links={links} setLinks={setLinks} />
        <OldLinks links={links} />
        <AdvanceStatics />
      </div>
    </>
  );
};

export default Home;
