import { useState } from "react";
import PricingCard from "./PricingCard";

const plansDesc = [
  {
    plan: "Free",
    callout: "contains ads",
    price: 0,
    planDesc: "Try it out for free",
    planFeatures: [
      "2 shortlinks/second",
      "Basic analytics",
      "Limited QR codes",
      "Email support"
    ]
  },
  {
    isyear: false,
    plan: "Pro Monthly",
    callout: "Most Popular",
    price: 9,
    planDesc: "For small teams and individuals",
    planFeatures: [
      "Unlimited shortlinks",
      "Advanced analytics",
      "Custom branded links",
      "Priority email support"
    ]
  },
  {
    isyear: false,
    plan: "Premium Monthly",
    price: 19,
    planDesc: "For growing businesses",
    planFeatures: [
      "Unlimited shortlinks & QR codes",
      "Full analytics dashboard",
      "Custom domain support",
      "Phone & email support"
    ]
  },
  {
    isyear: true,
    plan: "Pro Yearly",
    callout: "Save 20%",
    price: 90,
    planDesc: "Annual plan for small teams",
    planFeatures: [
      "Unlimited shortlinks",
      "Advanced analytics",
      "Custom branded links",
      "Priority email support"
    ]
  },
  {
    isyear: true,
    plan: "Premium Yearly",
    callout: "Best Value",
    price: 190,
    planDesc: "Annual plan for businesses",
    planFeatures: [
      "Unlimited shortlinks & QR codes",
      "Full analytics dashboard",
      "Custom domain support",
      "Phone & email support"
    ]
  }
];


const Plans = () => {
  const [showYearly, setShowYearly] = useState(false);
  return (
    <div>
      <div className="mb-7 flex justify-center items-center gap-5">
        <button
          className={`rounded-md  cursor-pointer py-2 px-5 group ${showYearly ? "border border-purple text-purple" : "text-white bg-purple"}`}
          onClick={() => setShowYearly(false)}>
          Monthly Plans
        </button>
        <button
          className={`rounded-md cursor-pointer py-2 px-5 group ${showYearly ? "text-white bg-purple" : "border border-purple text-purple"}`}
          onClick={() => setShowYearly(true)}>
          Annual Plans
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          plansDesc
            .filter(plans => plans.plan === "Free" || (showYearly ? plans.isyear : !plans.isyear))
            .map((item, index) => (
              <PricingCard
                key={index}
                plan={item.plan}
                callout={item.callout}
                price={item.price}
                planDesc={item.planDesc}
                planFeatures={item.planFeatures} />
            ))
        }
      </div>
    </div>
  )
}

export default Plans