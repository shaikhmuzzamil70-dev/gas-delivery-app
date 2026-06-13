function Filters({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("flat")}>Flat</button>
      <button onClick={() => setFilter("commercial")}>Commercial</button>
      <button onClick={() => setFilter("plot")}>Open Plot</button>
      <button onClick={() => setFilter("industrial")}>Industrial Gala</button>
    </div>
  );
}

export default Filters;