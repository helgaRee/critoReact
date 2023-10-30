import React from "react"

import NavSection from "../NavSection/NavSection"
import ShowcaseSection from "../ShowcaseSection/ShowcaseSection"
// ../ man backar ett steg
import img_backgroundLines from "../../assets/images/background-lines.svg"

const Header = () => {
  return (
    <header>
      {/* <img className="background-lines" src={img_backgroundLines} alt="Background lines" /> */}

      <NavSection />
      <ShowcaseSection />
    </header>
  )
}

export default Header
