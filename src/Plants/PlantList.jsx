import PlantItem from "./PlantItem";
export default function PlantList({ plantData, currCart, setCart }) {
  return (
    <>
      <section id="plantList">
        {plantData.map((plant) => (
          <article key={plant.id} className="plant-card">
            <PlantItem plant={plant} preCart={currCart} setCart={setCart} />
          </article>
        ))}
      </section>
    </>
  );
}
