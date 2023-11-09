import React from 'react'
import "./Hero.scss"
import herImg from "../../assets/images/hero.svg"
import { Button, Container } from "../../utils";

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>Stay corious.</h2>
            <p>Discover stories, thinking, nad expertiser from writers on my topic.</p>
            <Button type={"large"} text="Get Started" />
          </div>
          <div className="hero__image">
            <img src={herImg} alt="hero" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero