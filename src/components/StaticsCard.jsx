const StaticsCard = ({ stat_img, stat_title, stat_desc }) => {
    return (
        <div className="bg-white w-1/3 relative p-6 rounded-md">
            <div className="absolute -top-10 left-10 bg-purple rounded-full w-20 h-20 flex justify-center items-center">
                <img className="object-cover" src={stat_img} alt={stat_title} />
            </div>
            <div className="mt-15">
                <h3 className="font-bold text-black mb-4 text-xl">{stat_title}</h3>
                <p className="text-gray text-sm leading-relaxed">{stat_desc}</p>
            </div>
        </div>
    )
}

export default StaticsCard