import AdvanceStatics from '../components/AdvanceStatics'
import HeroComponent from '../components/HeroComponent'
import OldLinks from '../components/OldLinks'
import ShortnerForm from '../components/ShortnerForm'

const Home = () => {
  return (
    <>
      <HeroComponent />
      <div className='bg-light-gray relative'>
        <ShortnerForm />
        <AdvanceStatics />
      </div>
    </>
  )
}

export default Home