import AboutPage from "./AboutPage"
import AboutHero from "./Hero"

const About = () => {
  return (
    <div className="w-full min-h-svh bg-zinc-50 dark:bg-zinc-950">
      <AboutHero />
      <AboutPage />
    </div>
  )
}

export default About