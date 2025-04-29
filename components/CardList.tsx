import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import squareImage from "../public/400.svg"

type SeparatorPosition = "top" | "bottom" | "none";

interface ListCardProps {
  items: Array<{
    title: string;
    description: string;
  }>;
  layout?: "grid" | "list";
  className?: string;
  separatorPosition?: SeparatorPosition;
}

export default function CardList({
  items,
  className,
  separatorPosition,
}: ListCardProps) {
  return (
    <div className="@container">
      <div className="w-full grid grid-cols-1">
        {items.map((item, index) => (
          <Card key={index} className={className}>
            {separatorPosition === "top" && (
              <Separator className="bg-gray-300" />
            )}

            <CardHeader className="@container/card bg-gray-200 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 items-center p-4">
              {/* Image */}
              <div className="w-[125px] h-[125px] sm:w-[200px] sm:h-[200px]">
                <Image
                  src={squareImage}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="h-full w-full"
                />
              </div>

              {/* Title */}
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold underline">
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

            {separatorPosition === "bottom" && (
              <Separator className="bg-gray-300" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}