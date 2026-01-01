import { useNavigate } from "react-router-dom";
import checkicon from "/circle-check.svg";
const PricingCard = ({ plan, callout, price, planDesc, planFeatures }) => {
    const nav = useNavigate();
    return (
        <div className="border border-purple  hover:shadow-md hover:scale-105 transition-all duration-150 ease-in-out rounded-md overflow-hidden">
            <header className={`${callout ? "bg-purple text-white" : "bg-blue py-5 text-purple"} p-4 flex justify-between items-center `}>
                <p className="text-lg font-semibold">{plan}</p>
                {
                    callout && <p className="bg-white p-2 rounded-md text-purple text-sm">{callout}</p>
                }
            </header>
            <div className="p-4">
                <h3 className="text-xl font-bold">${price}<span className="text-base font-medium">/month</span> </h3>
                <button className="py-2 text-lg border hover:bg-purple border-purple text-blue transition-colors duration-100 ease-in-out font-semibold mt-3 rounded-md cursor-pointer w-40" onClick={() => nav("/signup")}>
                    Get Started
                </button>
                <p className="my-3 font-semibold">
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