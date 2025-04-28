import ListCard from "@/components/ListCard";
import LocationCard from "@/components/LocationCard";

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

const locationData = [
  {
    description: "[Optional location text] Nulla fringilla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut saepe eum sint, excepturi fugiat minima ex debitis quo id!",
    address: "208 Park Avenue",
    city: "New York",
    location: "NY 10017",
    map: "Map",
    telephone: "+1 212.364.7800"
  },
]

export default function Home() {
  return (
    <div className="@container/main space-y-16 p-2 @sm:p-10 wrapper pt-10">

      <section>
        <h2 className="text-2xl font-bold mb-8">Info Card Grid</h2>
        <ListCard items={infoItems} layout="grid" className="border-0 shadow-none p-0" />
      </section>
      
      <section className="pt-10">
        <h2 className="text-2xl font-bold mb-8">Info List Section</h2>
        <ListCard items={infoItems} layout="list" className="border-0 shadow-none p-0 gap-0" />
      </section>

      <section className="pt-8">
        <h2 className="text-2xl font-bold mb-8">Location Card</h2>
        <h2 className="text-3xl font-semibold pb-5">New York</h2>
        <LocationCard items={locationData} className="border-0 shadow-none p-0 gap-0"/>
      </section>
      
    </div>
  );
}