import Image from "next/image"
import image from "../public/png.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";

interface LocationCardProps {
  items: Array<{
    description: string;
    address: string;
    map: string;
    telephone: string;

  }>;
  className?: string;
}

export default function LocationCard({ items = [], className }: LocationCardProps) {
  return (
    <div className="@container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.map((item, index) => {
        return (
          <Card key={index} className={className}>

            <CardHeader className="p-0">
              <div className="image">
                <Image
                  src={image}
                  width={600}
                  height={500}
                  alt="error"
                  className="" />
              </div>
              <div className="pt-5">
                <CardDescription className="text-[15px] sm:text-xl text-gray-900">{item.description}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="text-[15px] sm:text-xl text-gray-900 py-4 px-0"> 
              <p>{item.address.slice(0,15)}</p>
              <p>{item.address.slice(15,25)}</p>
              <p>{item.address.slice(25,)}</p>
            </CardContent>

            <CardFooter className="grid px-0">
              <p className="text-[15px] sm:text-xl text-gray-900 pb-2 underline"><a href={item.map}>Map</a></p>
              <p><a href="tel:+1 212.364.7800" title="+1 212.364.7800">{item.telephone}</a></p>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}