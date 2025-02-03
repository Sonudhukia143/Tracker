const FilterDropdown = ({ setFilter }) => {
    return (
      <select className="form-select w-50" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Workouts</option>
        <option value="Running">Running</option>
        <option value="Cycling">Cycling</option>
        <option value="Yoga">Yoga</option>
      </select>
    );
  };
  
  export default FilterDropdown;
  