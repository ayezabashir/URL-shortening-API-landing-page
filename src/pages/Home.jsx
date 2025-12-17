import HeroComponent from '../components/HeroComponent'
import OldLinks from '../components/OldLinks'
import ShortnerForm from '../components/ShortnerForm'

const Home = () => {
  return (
    <>
      <HeroComponent />
      <div className='bg-light-gray py-50 mt-20 relative'>
        <ShortnerForm />
      </div>
    </>
  )
}

export default Home