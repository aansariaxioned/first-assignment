import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import rectangleImage from "../public/png.png";
import squareImage from "../public/400.svg";
import { Separator } from "@/components/ui/separator";


const InfoCard = ({ items = [], layout = "grid", className } : any) => {
  return (
    <div
      className={`w-full ${layout === "grid"
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        : "grid-col-1 "
        }`}
    >
      {items.map((item : any, index: number) => (
        <Card
          key={index} className={className}>
          {layout === "list" && (
            <Separator className="bg-gray-300"/>
          )}
          <CardContent
            className={`p-4  ${layout === "list"
              ? "bg-gray-200 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 items-center justify-between "
              : " grid grid-rows-[auto] lg:grid-rows-[auto_auto] gap-4"
              }`}
          >
            {/* Image */}
            <div className={`${layout === "grid" ? "w-full h-full" : "w-[125px] h-[125px] sm:w-[200px] sm:h-[200px]"}`}>
              <Image
                src={layout === "grid" ? rectangleImage : squareImage}
                alt="Placeholder"
                width={layout === "grid" ? 400 : 200}
                height={layout === "grid" ? 400 : 200}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Title and Description */}
           
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold underline">
                {item.title}
              </h1>
            
            {/* Arrow */}
            <div className="grid  col-span-full md:col-span-1">
              <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-5">
                {item.description}
              </p>
              <p className="text-2xl font-medium">↳</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default InfoCard;