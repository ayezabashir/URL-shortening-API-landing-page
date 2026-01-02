import PlansComparisonTable from "./PlansComparisonTable"
import { categories } from "../data/plans-data.json"

const PlansComparison = () => {
  return (
    <div className="my-10">
      <h3 className="text-center font-bold text-xl">Plans Features Comparison </h3>
      {
        categories.map((cate, index) => (
          <PlansComparisonTable
            key={index}
            t_heading={cate.heading}
            t_features={cate.features}
          />
        ))
      }
    </div>
  )
}

export default PlansComparison