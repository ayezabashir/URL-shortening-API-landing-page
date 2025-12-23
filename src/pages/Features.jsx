import FeaturesCard from "../components/FeaturesCard";

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
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          allFeatures.map((feature, index) => (
            <FeaturesCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))
        }
      </div>
    </div>
  )
}

export default Features