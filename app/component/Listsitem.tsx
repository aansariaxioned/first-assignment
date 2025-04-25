import Image from "next/image";
import { Separator } from "@/components/ui/separator"


export default function Listitem({ image, title, description } : any) {
    return (
        <section className="list-section">
            {/* <h1 className="font-bold text-2xl underline pl-50 pb-10 underline">Info List Section</h1> */}
            <div className="list-card grid ">
            {/* <Separator /> */}
      

            <Separator className="h-[1px] bg-gray-400" />

                <div className="card grid  justify-center items-center grid-cols-1 lg:grid-cols-3  px-10 py-5 gap-5 bg-gray-200 -2 ">

                    {/* Image */}
                    <div className="card image">
                        <Image
                            src={image}
                            width={200}
                            height={200}
                            alt="Error"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-medium underline">{title}</h1>

                    {/* Description */}

                    {/* Icon */}
                    <div>

                        <p>{description}</p>
                        <div className="arrow-image">
                            <Image
                                src="/turn-right.png"
                                width={20}
                                height={20}
                                alt="placeholder image" />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}