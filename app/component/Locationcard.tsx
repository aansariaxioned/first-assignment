import Image from "next/image"
import image from "../../public/png.png"

export default function Locationcard() {
  return (
    <section className="location-card py-10 grid justify-start">
       <h1 className="text-2xl font-bold  underline py-10">Location Card</h1>
       <h2 className="text-3xl font-semibold pb-5">New York</h2>
      <div className="new-york-card  w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
        <div className="image">
          <Image
            src={image}
            width={600}
            height={500}
            alt="error"
            className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px]" />
        </div>

        <div className="detail pt-5">
          <p className="text-[15px] sm:text-xl text-gray-900">[Optional location text] Nulla fringilla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut saepe eum sint, excepturi fugiat minima ex debitis quo id!</p>
        </div>


        <div className="address text-[15px] sm:text-xl text-gray-900 py-8  ">
          <p>208 Park Avenue</p>
          <p>New York</p>
          <p>NY 10017</p>
        </div>

        <p className="text-[15px] sm:text-xl text-gray-900 pb-2 underline">Map</p>

        <p>+1 212.364.7800</p>
      </div>

    </section>

  )
}