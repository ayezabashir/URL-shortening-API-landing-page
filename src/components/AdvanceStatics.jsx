import StaticsCard from './StaticsCard'
import brandicon from "/icon-brand-recognition.svg";
import detailedicon from "/icon-detailed-records.svg";
import customicon from "/icon-fully-customizable.svg";
const stats = [
    {
        img: brandicon,
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },
    {
        img: detailedicon,
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        img: customicon,
        title:"Fully Customizable",
        description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
]

const AdvanceStatics = () => {
  return (
    <section className="container">
        <div className='flex flex-col justify-center items-center gap-5 mb-10'>
            <h2 className='text-3xl text-black font-bold'>Advanced Statistics</h2>
            <p className='text-gray font-semibold max-w-120 text-center'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className='flex justify-between gap-5'>
            {
                stats.map((stat, index)=>(
                    <StaticsCard key={index} stat_img={stat.img} stat_title={stat.title} stat_desc={stat.description} />
                ))
            }
        </div>
    </section>
  )
}

export default AdvanceStatics