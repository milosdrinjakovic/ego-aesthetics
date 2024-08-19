import DoctorsSection from '@/app/components/doctors/DoctorsSection'
import React from 'react'

export default function AboutUs() {


  return (
    <>
    <div >
    <section className="bg-zinc-100 py-32 min-h-full mt-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-goldLogo">About Us</h2>
        <p className="mt-4 text-goldLogo">Discover our story and the team behind our beauty salon.</p>
      </div>

      <div className="flex flex-wrap -mx-4 p-12 rounded-5xl bg-white shadow-lg">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <img
            src="/images/salon1.jpg"
            alt="Salon Interior"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-goldLogo mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Welcome to our beauty salon, where we offer a wide range of services designed to help you look and feel your best. Our experienced team is dedicated to providing you with the highest quality of care in a relaxing and welcoming environment.
          </p>
          <p className="text-gray-600">
            Whether you're here for a quick touch-up or a complete makeover, we are committed to ensuring your satisfaction with every visit. Come and experience the difference at our beauty salon!
          </p>
        </div>
      </div>
    </div>
  </section>
  </div>
      <DoctorsSection />
      
      </>

  )

 
}
