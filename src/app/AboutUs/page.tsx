import About from '@/components/About'
import MainBreadcum from '@/components/BreadCum'
import Footer from '@/components/Footer'
import PromotionBanner from '@/components/PromotionBanner'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <MainBreadcum name='About Us' pageName='About Us'/>
      <About/>
      <PromotionBanner/>
      <Footer/>
    </div>
  )
}

export default AboutUs
