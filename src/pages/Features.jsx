import { useNavigate } from "react-router-dom";
import FeaturesCard from "../components/FeaturesCard";
import Testimonials from "../components/Testimonials";

const allFeatures = [
  {
    icon: "⚡",
    title: "Easy",
    description:
      "Easy and fast, enter the long link to get your shortened link",
  },
  {
    icon: "✂️",
    title: "Shortened",
    description:
      "Use any link, no matter what size, ShortURL always shortens",
  },
  {
    icon: "🔒",
    title: "Secure",
    description:
      "It is fast and secure, our service has data encryption",
  },
  {
    icon: "📊",
    title: "Statistics",
    description:
      "Check number of clicks that your shortened URL get",
  },
  {
    icon: "🛡️",
    title: "Reliable",
    description:
      "All links that try to spam and malware are deleted",
  },
  {
    icon: "📱",
    title: "Devices",
    description:
      "Compatible with smartphones, tablets and desktop",
  },
];

const Features = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="bg-light-gray bg-linear-to-t to-blue from-white">
        <div className="container">
          <div className="max-w-225 mx-auto text-center py-15">
            <h1 className="text-base md:text-lg font-bold text-gray mb-2">Powerful Connections Begin with a Click</h1>
            <h2 className="text-3xl md:text-5xl font-extrabold text-purple mb-7">Shortly Connection Platform</h2>
            <p className="text-base md:text-xl font-light leading-relaxed">The Shortly Connections Platform brings together everything you need to create strong brand connections, manage links and QR codes, and engage audiences everywhere — all in one seamless platform.</p>
            <button type="button" className="py-3 text-lg bg-black text-blue font-semibold mt-10 rounded-md cursor-pointer transform duration-150 ease-in-out hover:scale-105 w-50" onClick={()=>nav("/pricing")}>
              Get started for free
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {
            allFeatures.map((feature, index) => (
              <FeaturesCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))
          }
        </div>
      </div>
      <Testimonials />
    </>
  )
}

export default Features