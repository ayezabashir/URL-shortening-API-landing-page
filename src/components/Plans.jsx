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
  return (
    <div>
        {
            plansDesc.map((item,index)=>(
                <PricingCard key={index} plan={item.plan} callout={item.callout} price={item.price} planDesc={item.planDesc} planFeatures={item.planFeatures} />
            ))
        }
    </div>
  )
}

export default Plans