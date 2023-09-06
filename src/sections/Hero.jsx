import { arrowRight } from "../../assets/icons"
import Button from "../Components/Button"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full  
      xl:flex-row flex-col justify-center 
      min-h-screen gap-10 max-container" 
    >
      Hero

      <div 
        className="relative xl:w-2/5 w-full flex flex-col
        justify-center items-start max-xl:padding-x pt-28 border-2 border-red-700"
      >
        <p>Our Summer Collection</p>
        <h1>
          <span>Introducing Fresh</span>
          <br />
          <span>Nike </span>
          Shoes Arrivals
        </h1>
        <p>
        Experience the ultimate in Nike excellence: Explore the latest arrivals, elevate your comfort, and embrace unmatched innovation for your active lifestyle. Discover Nike, redefined.
        </p>
        <Button 
          label = "Shop Now"
          iconURL = {arrowRight}
        />
        
      </div>


    </section>
  )
}

export default Hero