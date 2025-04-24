import Image from "next/image";

export default function Card({ image, title, description }) {


  return (
    <div className="aall-cards grid justify-center">

      <div className="card-item grid gap-5  max-w-sm">

        <div className="card-image">
          <Image
            src={image}
            width={400}
            height={400}
            alt="Placeholder image"
          />
        </div>
        <h1 className="heading text-3xl font-medium  border-b border-gray-800  w-fit">{title}</h1>
        <p>{[description]}</p>

        <div className="arrow-image">
          <Image
            src="/turn-right.png"
            width={20}
            height={20}
            alt="placeholder image" />

        </div>
      </div>


    </div>
  )
}