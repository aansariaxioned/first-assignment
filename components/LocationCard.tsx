import Image from "next/image"
import image from "../public/png.png"

interface LocationCardProps {
  items: Array<{
    description: string;
    address: string;
    city: string;
    location: string;
    map: string;
    telephone: string;
  }>;
}

export default function LocationCard({ items = [] }: LocationCardProps) {
  return (
    <div className="@container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.map((item, index) => {
        return (
          <div key={index} className="new-york-card">
            <div className="image">
              <Image
                src={image}
                width={600}
                height={500}
                alt="error"
                className="" />
            </div>
            <div className="pt-5">
              <p className="text-[15px] sm:text-xl text-gray-900">{item.description}</p>
            </div>
            <div className="text-[15px] sm:text-xl text-gray-900 py-4">
              <p>{item.address}</p>
              <p>{item.city}</p>
              <p>{item.location}</p>
            </div>
            <p className="text-[15px] sm:text-xl text-gray-900 pb-2 underline">{item.map}</p>
            <p><a href="tel:+1 212.364.7800" title="+1 212.364.7800">{item.telephone}</a></p>
          </div>
        )
      })}
    </div>
  )
}