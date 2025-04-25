import Image from "next/image";

export default function Card({ image, title, description } : any) {


  return (
    <section className="all-cards">
      
      <div className="card-item grid gap-5">
        <div className="card-image">
          <Image
            src={image}
            width={400}
            height={400}
            alt="Placeholder image"
            className="w-full"
          />
        </div>
        <h1 className="heading text-3xl font-medium  underline ">{title}</h1>
        <p>{description}</p>

        <div className="arrow-image">
          <Image
            src="/turn-right.png"
            width={20}
            height={20}
            alt="placeholder image" />

        </div>
      </div>


    </section>
  )
}