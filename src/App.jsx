import { useState, useEffect } from "react";
import AddWorkoutForm from "./components/AddWorkoutForm.jsx";
import WorkoutTable from "./components/WorkoutTable.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterDropdown from "./components/FilterDropdown.jsx";
import WorkoutChart from "./components/WorkoutChart.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(storedData);
  }, []);

  const addWorkout = (workout) => {
    const newWorkouts = [...workouts, workout];
    setWorkouts(newWorkouts);
    localStorage.setItem("workouts", JSON.stringify(newWorkouts));
  };

  const filteredWorkouts = workouts.filter((workout) => {
    return (
      (searchQuery === "" || workout.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filter === "" || workout.type === filter)
    );
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center">Health Challenge Tracker</h2>
      <AddWorkoutForm addWorkout={addWorkout} />
      <div className="d-flex justify-content-between mt-3">
        <SearchBar setSearchQuery={setSearchQuery} />
        <FilterDropdown setFilter={setFilter} />
      </div>
      <WorkoutTable workouts={filteredWorkouts} />
      <WorkoutChart data={filteredWorkouts} />
    </div>
  );
};

export default App;
