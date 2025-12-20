import AdvanceStatics from '../components/AdvanceStatics'
import HeroComponent from '../components/HeroComponent'
import ShortnerForm from '../components/ShortnerForm'

const Home = () => {
  return (
    <>
      <HeroComponent />
      <div className='bg-light-gray relative mt-15'>
        <ShortnerForm />
        <AdvanceStatics />
      </div>
      <div className="w-full bg-purple bg-no-repeat bg-[url(/bg-boost-mobile.svg)] lg:bg-[url(/bg-boost-desktop.svg)]">
        <div className="p-10 flex flex-col justify-center items-center">
          <h4 className='text-white font-bold text-2xl mb-5'>Boost Your Link Today</h4>
          <button className='bg-blue hover:opacity-90 cursor-pointer text-white py-2 px-5 rounded-3xl text-base font-bold'>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Home