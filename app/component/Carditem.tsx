import Image from "next/image";
import img from "../../public/png.png";

export default function Carditem() {
    const data = [
        {
            image: img,
            title: "[Our team]",
            description: "[Advising many of the world's most consequential companies on strategic objectives]",
            icon: "↳",
        },
        {
            image: img,
            title: "[Our experties]",
            description: "[Providing deep market intelligence and competitive analysis for strategic advantage]",
            icon: "↳",
        },
        {
            image: img,
            title: "[Community impact]",
            description: "[Helping organizations streamline operations and drive efficiencies across processes]",
            icon: "↳",
        },
    ];
    return (
        <section className="all-cards-grid border-2 py-20">
            <h1 className="font-bold text-2xl underline pl-50 pb-10">Info Card Grid</h1>
            <div className="all-card  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-10 lg:px-10 xl:px-50">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="card grid gap-5">

                                {/* Image */}
                                <div className="card image">
                                    {/* <Image
                                        src={item.image}
                                        width={500}
                                        height={350}
                                        alt="Error"
                                    /> */}

                                    <p className="h-65 w-full bg-gray-300"></p>
                                </div>

                                {/* Title */}
                                <h1 className="text-2xl font-medium underline">{item.title}</h1>

                                {/* Description */}
                                <p>{item.description}</p>

                                {/* Icon */}
                                <p className="text-3xl">{item.icon}</p>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}