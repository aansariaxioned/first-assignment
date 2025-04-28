import Image from "next/image"
import image from "../public/png.png"

export default function Locationcard() {
  return (
    <section id="location-card" className="py-10 grid justify-start">
      <h1 className="text-2xl font-bold  py-10">Location Card</h1>
      <h2 className="text-3xl font-semibold pb-5">New York</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div className="new-york-card  ">
        <div className="image">
          <Image
            src={image}
            width={600}
            height={500}
            alt="error"
            className="" />
        </div>

        <div className=" pt-5">
          <p className="text-[15px] sm:text-xl text-gray-900">[Optional location text] Nulla fringilla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut saepe eum sint, excepturi fugiat minima ex debitis quo id!</p>
        </div>


        <div className=" text-[15px] sm:text-xl text-gray-900 py-8  ">
          <p>208 Park Avenue</p>
          <p>New York</p>
          <p>NY 10017</p>
        </div>

        <p className="text-[15px] sm:text-xl text-gray-900 pb-2 underline">Map</p>

        <p><a href="tel:+1 212.364.7800">+1 212.364.7800</a></p>
      </div>
            </div>

    </section>

  )
}