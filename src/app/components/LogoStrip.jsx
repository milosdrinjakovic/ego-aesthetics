import React from 'react'

export default function LogoStrip({data}) {
 return (
    <div className="mt-20  ">
      <div className="flex justify-around items-center">
        {data.map((logo) => (
          <div
            key={logo.id}
            className="group perspective p-1 flex justify-center mx-2"
          >
            <div className="relative w-36 h-36 transform-style-3d group-hover:my-rotate-y-180">
              <div className="absolute inset-0 backface-hidden">
                <img src={logo.src} alt={logo.alt} className="h-24 w-auto" />
              </div>
              <div className="absolute inset-0 backface-hidden my-rotate-y-180">
                <img src={logo.src} alt={logo.alt} className="h-24 w-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

)
}
