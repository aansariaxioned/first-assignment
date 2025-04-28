import InfoCard from "@/components/ListCard";
import Locationcard from "@/components/LocationCard";



// import InfoCard from "@/components/InfoCard";
const infoItems = [
  {
    title: "[Our team]",
    description: "[Short description Lorem ipsum dolor sit amet, consectetur adipiscing elit.]",
  },
  {
    title: "[Our expertise]",
    description: "[Short description Lorem ipsum dolor sit amet, consectetur adipiscing elit.]",
  },
  {
    title: "[Community impact]",
    description: "[Short description Lorem ipsum dolor sit amet, consectetur adipiscing elit.]",
  },
];

export default function Home() {
  return (
    <div className="@container space-y-16 p-2 sm:p-10 wrapper">
      <section>
        <h2 className="text-2xl font-bold mb-8">Info Card Grid</h2>
        <InfoCard items={infoItems} layout="grid" className={`border-0 shadow-none`} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-8">Info List Section</h2>
        <InfoCard items={infoItems} layout="list" className={`border-0 shadow-none gap-0 p-0` } />
      </section>

      <Locationcard />
    </div>
  );
}