import Card from "./component/Card";
import img from "../public/png.png";

export default function Home() {
  const data = [
    {
      image: img,
      title: "Strategic advisory",
      description: "Advising many of the world's most consequential companies on strategic objectives",
      icon: "↳",
    },
    {
      image: img,
      title: "Market insights",
      description: "Providing deep market intelligence and competitive analysis for strategic advantage",
      icon: "↳",
    },
    {
      image: img,
      title: "Operational excellence",
      description: "Helping organizations streamline operations and drive efficiencies across processes",
      icon: "↳",
    },
  ];

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 justify-center items-center h-[100vh]">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
