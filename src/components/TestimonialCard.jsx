const TestimonialCard = ({ pic,name, role, quote }) => {
    return (
        <div className="bg-white border-purple border-2 py-7 px-5 w-500">
            <div className="flex flex-col gap-2">
                <p className="text-9xl text-purple">‘‘</p>
                <h3 className="text-base font-semibold">{quote}</h3>
                <div className="flex items-center gap-3">
                    <div className="h-20 w-20 overflow-hidden">
                        <img className="h-full w-full object-cover rounded-lg" src={pic} alt={name} />
                    </div>
                    <div className="text-sm">
                        <h4>{name}</h4>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TestimonialCard