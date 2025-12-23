const FeaturesCard = ({icon, title,description}) => {
  return (
    <div className='flex flex-col justify-between items-center border border-blue py-10 px-5 rounded-xl min-h-70 hover:shadow-sm group shadow-blue'>
        <div className="border border-blue h-20 w-20 flex justify-center items-center bg-blue rounded-full">
            <p className="text-4xl transform group-hover:scale-110 ease-in-out duration-150 select-none">{icon}</p>
        </div>
        <div className='text-center mt-5'>
            <h1 className='font-semibold text-xl text-purple'>{title}</h1>
            <p className='text-base mt-2 text-black'>{description}</p>
        </div>
    </div>
  )
}

export default FeaturesCard