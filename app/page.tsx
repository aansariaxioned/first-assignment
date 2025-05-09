import CardItem from "@/components/CardItem";
import CardList from "@/components/CardList";
import GridCardWrapper from "@/components/GridCardWrapper";
import GridListWrapper from "@/components/GridListWrapper";
import LocationCard from "@/components/LocationCard";

const infoItems = [
  {
    title: "[Our team]",
    description:
      "[Short description Lorem ipsum dolor sit amet, consectetur adipiscing elit.]",
  },
  {
    title: "[Our expertise]",
    description:
      "[Short description Lorem ipsum dolor sit amet, consectetur adipiscing elit.]",
  },
  {
    title: "[Community impact]",
    description:
      "[Short description Lorem ipsum dolor sit amet, consectetur adipiscing elit.]",
  },
];

const locationData = [
  {
    description:
      "[Optional location text] Nulla fringilla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut saepe eum sint, excepturi fugiat minima ex debitis quo id!",
    address: "208 Park Avenue New York NY 10017",
    map: "map",
    telephone: "+1 212.364.7800",
  },
];

export default function Home() {
  return (
    <div className=" space-y-16 p-2 @sm:p-10 wrapper pt-10">
      <section>
        <h2 className="text-2xl font-bold mb-8">Info Card Grid</h2>
        <GridCardWrapper>
          <CardItem items={infoItems} className="border-0 shadow-none p-0" />
        </GridCardWrapper>
      </section>

      <section className="pt-10">
        <h2 className="text-2xl font-bold mb-8">Info List Section</h2>
        <GridListWrapper>
          <CardList
            items={infoItems}
            layout="list"
            className="border-0 shadow-none p-0 gap-0"
            separatorPosition="top"
          />
        </GridListWrapper>
      </section>

      <section className="pt-8">
        <h2 className="text-2xl font-bold mb-8">Location Card</h2>
        <h2 className="text-3xl font-semibold pb-5">New York</h2>
        <LocationCard
          items={locationData}
          className="border-0 shadow-none px-0 gap-0"
        />
      </section>
    </div>
  );
}