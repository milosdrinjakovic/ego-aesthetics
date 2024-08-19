import PriceAccordion from '@/app/components/PriceAccordion'
import React from 'react'
import pricingData from '@/app/data/treatmantsPrices.json'

export default function Pricing() {
  return (
    <div>
        <PriceAccordion data={pricingData}/>
    </div>
  )
}
