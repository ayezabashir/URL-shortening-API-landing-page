import Plans from "../components/Plans"

const Pricing = () => {
  return (
    <>
      <div className="container">
        <div className="max-w-225 mx-auto text-center py-10 sm:py-15">
          <h1 className="text-xl sm:text-3xl font-bold text-purple mb-1">Smart link management, simplified</h1>
          <h2 className="text-base sm:text-lg text-purple font-light mb-7">Create, track, and optimize short links that boost engagement and deliver real insights.</h2>
        </div>
        <Plans />
      </div>
    </>
  )
}

export default Pricing