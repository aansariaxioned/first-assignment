import Image from "next/image";
import rectangleImage from "../public/png.png"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ListCardProps {
  items: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
}

export default function CardItem({ items, className }: ListCardProps) {
  return (
    <div className="@container">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {items.map((item, index) => (
          <Card key={index} className={className}>
            <CardHeader className="grid gap-y-4 p-0">
              {/* Image */}
              <div className="grid grid-cols-2 md:grid-cols-1">
                <Image
                  src={rectangleImage}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="h-full w-full"
                />
              </div>

              {/* Title */}
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold underline ">
                {item.title}
              </CardTitle>

              {/* Description and Arrow */}
              <div className="grid col-span-full md:col-span-1">
                <CardDescription className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </CardDescription>
                <p className="text-4xl font-medium">↳</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}