const PlansComparisonTable = ({ t_heading, t_features }) => {
    return (
        <div className="my-5 border border-gray rounded-2xl p-5 w-full overflow-x-auto">
            <h4 className="w-full font-bold text-lg mb-5 ">
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
                                <td className={`w-[25%] text-sm text-purple py-4 font-medium ${isLast ? "border-0" : "border-b border-gray"}`}>
                                    {feature.name}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-gray"}`}>
                                    {feature.free}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-gray"}`}>
                                    {feature.pro_Monthly}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-gray"}`}>
                                    {feature.premium_Monthly}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-gray"}`}>
                                    {feature.pro_Yearly}
                                </td>
                                <td className={`text-sm text-purple py-4 font-light ${isLast ? "border-0" : "border-b border-gray"}`}>
                                    {feature.premium_Yearly}
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