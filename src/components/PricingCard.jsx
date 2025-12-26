import { useNavigate } from "react-router-dom";
import checkicon from "/circle-check.svg";
const PricingCard = ({ plan, callout, price, planDesc, planFeatures }) => {
    const nav = useNavigate();
    return (
        <div className="border border-purple hover:shadow-sm">
            <header className={`${callout ? "bg-purple text-white" : "bg-blue text-purple"} p-4 `}>
                <p className="text-lg font-semibold">{plan}</p>
                {
                    callout && <p className="bg-white p-2 rounded-md text-purple text-sm">{callout}</p>
                }
            </header>
            <div className="p-4">
                <h3 className="text-xl font-bold">${price}<span className="text-base font-medium">/month</span> </h3>
                <button className="py-3 text-lg border border-black text-blue font-semibold mt-10 rounded-md cursor-pointer w-50" onClick={() => nav("/signup")}>
                    Get Started
                </button>
                <p>
                    {planDesc}
                </p>
                <ul className="flex flex-col gap-2">
                    {
                        planFeatures.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm leading-relaxed"> <img className="w-5" src={checkicon} alt="check icon" /> {feature}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default PricingCard