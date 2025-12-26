import Header from '../../Components/Header/header'
import HomeImages from '../../Components/HomeImages/images'
import Hero from '../../Components/Hero/hero'
import Footer from '../../Components/Footer/footer'

function Home({user}) {
  return (
    <>
      <Header user={user} />
      <HomeImages />
      <Hero />
      <Footer />
    </>
  )
}

export default Home
