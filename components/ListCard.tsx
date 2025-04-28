import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import rectangleImage from "@/public/png.png";
import squareImage from "@/public/400.svg";

interface ListCardProps {
  items: Array<{
    title: string;
    description: string;
  }>;
  layout?: "grid" | "list";
  className?: string;
}

export function ListCard({ items, layout = "grid", className }: ListCardProps) {
  return (
    <div className="@container">
      <div className={`
        w-full
        ${layout === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" 
          : "grid grid-cols-1 "
        }
      `}>
        {items.map((item, index) => (
          <Card key={index} className={className}>
            {layout === "list" && (
            <Separator className="bg-gray-300"/>
          )}
            <CardHeader className={`
              ${layout === "list"
                ? "@container/card  bg-gray-200 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 items-center p-4"
                : "grid gap-y-4 p-0"
              }
            `}>
              {/* Image */}
              <div className={`
                ${layout === "list"
                  ? "w-[125px] h-[125px] sm:w-[200px] sm:h-[200px]"
                  : "w-full h-full"
                }
              `}>
                <Image
                  src={layout === "grid" ? rectangleImage : squareImage}
                  alt={item.title}
                  width={layout === "grid" ? 400 : 200}
                  height={layout === "grid" ? 400 : 200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Title */}
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold underline">
                {item.title}
              </CardTitle>

              {/* Description and Arrow */}
              <div className="grid  col-span-full md:col-span-1">
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

export default ListCard; 