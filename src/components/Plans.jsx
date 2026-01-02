import { useState } from "react";
import PricingCard from "./PricingCard";
import { plans } from "../data/plans-data.json";

const Plans = () => {
  const [showYearly, setShowYearly] = useState(false);
  return (
    <div className="mb-10">
      <div className="mb-7 flex justify-center items-center gap-3">
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
          plans
            .filter(plans => plans.plan === "free" || (showYearly ? plans.isyear : !plans.isyear))
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