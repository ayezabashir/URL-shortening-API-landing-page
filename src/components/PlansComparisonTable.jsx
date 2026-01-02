const PlansComparisonTable = ({ t_heading, t_features }) => {
    return (
        <table className="my-5 border border-gray rounded-2xl">
            <tbody>
                <tr>
                    <th>
                        {t_heading}
                    </th>
                </tr>
                {
                    t_features.map((feature, index) => (
                        <tr key={index} className="py-2">
                            <td className="text-sm text-purple font-medium">
                                {feature.name}
                            </td>
                            <td className="text-sm text-purple font-light">
                                {feature.pro_Monthly}
                            </td>
                            <td className="text-sm text-purple font-light">
                                {feature.premium_Monthly}
                            </td>
                            <td className="text-sm text-purple font-light">
                                {feature.pro_Yearly}
                            </td>
                            <td className="text-sm text-purple font-light">
                                {feature.premium_Yearly}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PlansComparisonTable