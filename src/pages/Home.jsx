import HeroComponent from '../components/HeroComponent'
import OldLinks from '../components/OldLinks'
import ShortnerForm from '../components/ShortnerForm'

const Home = () => {
  return (
    <>
      <HeroComponent />
      <div className='bg-light-gray'>
        <ShortnerForm />
      <OldLinks />
      <OldLinks />

      </div>
    </>
  )
}

export default Home