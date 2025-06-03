import MainBreadcum from '@/components/BreadCum'
import Footer from '@/components/Footer'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import PromotionBanner from '@/components/PromotionBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainBreadcum name='IndustriesWeServe' pageName='IndustriesWeServe'/>
      <IndustriesWeServe/>
      <PromotionBanner/>
      <Footer/>
    </div>
  )
}

export default page
