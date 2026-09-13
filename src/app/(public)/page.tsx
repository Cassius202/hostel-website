import WaitingForm from "@/components/footer/WaitingForm"
import Hero from "@/components/hero/Hero"
import SecondHero from "@/components/hero/SecondHero"
import Review from "@/components/reviews/Review"
import AmenitiesSection from "@/components/services/AmenitiesSection"
import RoomsSection from "@/components/services/RoomsSection"
import Amenities from "@/components/services/Services"

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Hero />
      <SecondHero />
      <RoomsSection />
      <Amenities />
      <AmenitiesSection />
      <Review />
      <WaitingForm />
    </div>
  )
}

export default HomePage