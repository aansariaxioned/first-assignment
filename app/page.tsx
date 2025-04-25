import Card from "./component/Card";
import img from "../public/png.png";
import Carditem from "./component/Carditem";
import Listitem from "./component/Listsitem";
import img1 from "../public/400.svg"
import Locationcard from "./component/Locationcard";

export default function Home() {
  const data = [
    {
      image: img,
      image1: img1,
      title: "Strategic advisory",
      description: "Advising many of the world's most consequential companies on strategic objectives",

    },
    {
      image: img,
      image1: img1,
      title: "Market insights",
      description: "Providing deep market intelligence and competitive analysis for strategic advantage",

    },
    {
      image: img,
      image1: img1,
      title: "Operational excellence",
      description: "Helping organizations streamline operations and drive efficiencies across processes",

    },
  ];

  return (
    <>
      <div className="wrapper">
        <div>
          <h1 className="text-2xl font-bold  underline py-10">Info Card Grid</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-10 pb-20">

            {data.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold  underline py-10">Info List Section</h1>
          <div className="list-card grid">

            {data.map((item, index) => (
              <Listitem
                key={index}
                image={item.image1}
                title={item.title}
                description={item.description}
              />
            ))}

          </div>
        </div>

        <Locationcard />
      </div>
    </>

  );
}
