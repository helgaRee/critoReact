import React from "react"
import AdvertisingBox from "./AdvertisingBox"

import brand1 from "../../assets/images/3.svg"
import brand2 from "../../assets/images/Landing-Pages.svg"
import brand3 from "../../assets/images/Page-2.svg"
import brand4 from "../../assets/images/Page-3.svg"
import brand5 from "../../assets/images/Page-1.svg"

const Advertising = ({ image }) => {
  const brands = [
    {
      image: brand1,
    },
    {
      image: brand2,
    },
    {
      image: brand3,
    },
    {
      image: brand4,
    },
    {
      image: brand5,
    },
  ]

  return (
    <div className="img-advertising container">
      {/* Mappar ut listan brands */}
      {brands.map((brand, index) => (
        <AdvertisingBox key={index} image={brand.image} />
      ))}
    </div>
  )
}

export default Advertising
