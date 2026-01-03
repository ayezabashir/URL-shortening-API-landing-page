import checkicon from "/circle-check.svg"
import falseicon from "/circle-xmark.svg"
const PlansComparisonTable = ({ t_heading, t_features }) => {
    const iconMap = {
        unincluded: falseicon,
        included: checkicon
    }
    return (
        <div className="my-5 border border-blue rounded-2xl p-5 w-full overflow-x-auto">
            <h4 className="w-full font-bold text-lg mb-5">
                {t_heading}
            </h4>
            <table className="w-full">
                <tbody>
                    <tr>
                        <th className="w-[25%] font-semibold pb-5">Name</th>
                        <th className="font-semibold pb-5 whitespace-nowrap">Free</th>
                        <th className="font-semibold pb-5 whitespace-nowrap">Pro Monthly</th>
                        <th className="font-semibold pb-5 whitespace-nowrap">Premium Monthly</th>
                        <th className="font-semibold pb-5 whitespace-nowrap">Pro Yearly</th>
                        <th className="font-semibold pb-5 whitespace-nowrap">Premium Yearly</th>
                    </tr>
                    {
                        t_features.map((feature, index) => {
                            const isLast = index === t_features.length - 1;
                            return <tr key={index} >
                                <td className={`w-[25%] text-sm text-purple py-4 font-medium ${isLast ? "border-0" : "border-b border-blue"}`}>
                                    {feature.name}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-blue"}`}>
                                    {
                                        feature.free === "unincluded" ? <img src={iconMap.unincluded} alt="unincluded" className="w-5" /> :
                                            feature.free === "included" ? <img src={iconMap.included} alt="included" className="w-5" /> :
                                                feature.free
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-blue"}`}>
                                    {
                                        feature.pro_Monthly === "unincluded" ? <img src={iconMap.unincluded} alt="unincluded" className="w-5" /> :
                                            feature.pro_Monthly === "included" ? <img src={iconMap.included} alt="included" className="w-5" /> :
                                                feature.premium_Monthly
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-blue"}`}>
                                    {
                                        feature.premium_Monthly === "unincluded" ? <img src={iconMap.unincluded} alt="unincluded" className="w-5" /> :
                                            feature.premium_Monthly === "included" ? <img src={iconMap.included} alt="included" className="w-5" /> :
                                                feature.premium_Monthly
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-blue"}`}>
                                    {
                                        feature.pro_Yearly === "unincluded" ? <img src={iconMap.unincluded} alt="unincluded" className="w-5" /> :
                                            feature.pro_Yearly === "included" ? <img src={iconMap.included} alt="included" className="w-5" /> :
                                                feature.pro_Yearly
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-blue"}`}>
                                    {
                                        feature.premium_Yearly === "unincluded" ? <img src={iconMap.unincluded} alt="unincluded" className="w-5" /> :
                                            feature.premium_Yearly === "included" ? <img src={iconMap.included} alt="included" className="w-5" /> :
                                                feature.premium_Yearly
                                    }
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlansComparisonTable