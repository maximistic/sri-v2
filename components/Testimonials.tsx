import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20 bg-fuchsia-400">
        <div className='w-full h-full md:px-10 px-5'>

            <div className="flex flex-col items-center gap-5">
                <div className="hero-badge">
                    <p>Client Testimonials</p>
                </div>
                <div>
                    <h1 className="font-semibold md:text-5xl text-3xl text-center">
                        Hear From My Clients
                    </h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials