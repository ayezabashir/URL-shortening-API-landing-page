import quoteicon from "/quote-left.svg"
const TestimonialCard = ({ direction, pic, name, role, quote }) => {
    return (
        <div className={`bg-white border-purple border-2 rounded-3xl p-5 md:p-10 mx-auto w-full sm:w-[80%] ${direction === "left" ? "animate-slide-in-left" : "animate-slide-in-right"
            } `}>
            <div className="flex flex-col gap-2">
                <img className="w-15 sm:w-20" src={quoteicon} alt="quote icon" />
                <h4 className="text-lg font-semibold text-purple">{quote}</h4>
                <div className="flex items-center gap-3 mt-3">
                    <div className="h-15 w-15 sm:h-20 sm:w-20 overflow-hidden">
                        <img className="h-full w-full object-cover rounded-lg" src={pic} alt={name} />
                    </div>
                    <div className="text-sm">
                        <h4 className="font-bold">{name}</h4>
                        <p className="font-light text-base sm:text-lg">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard