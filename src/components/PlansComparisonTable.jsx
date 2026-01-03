import checkicon from "/circle-check.svg"
import falseicon from "/circle-xmark.svg"
const PlansComparisonTable = ({ t_heading, t_features }) => {
    const iconMap = {
        unincluded: falseicon,
        included: checkicon
    }
    const renderValue = (value) => {
        if (value === "unincluded") {
            return <img src={iconMap.unincluded} className="w-5" alt="unincluded" />
        } else if (value === "included") {
            return <img src={iconMap.included} className="w-5" alt="included" />
        } else {
            return value
        }
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
                            const borderClass = isLast ? "border-0" : "border-b border-blue";
                            return <tr key={index} >
                                <td className={`w-[25%] text-sm text-purple py-4 font-medium ${borderClass}`}>
                                    {feature.name}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${borderClass}`}>
                                    {
                                        renderValue(feature.free)
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${borderClass}`}>
                                    {
                                        renderValue(feature.pro_Monthly)
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${borderClass}`}>
                                    {
                                        renderValue(feature.premium_Monthly)
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${borderClass}`}>
                                    {
                                        renderValue(feature.pro_Yearly)
                                    }
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${borderClass}`}>
                                    {
                                        renderValue(feature.premium_Yearly)
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