import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import PaginationComponent from '../components/Pagination.jsx';  // Import the Pagination Component

const WorkoutTable = ({ workouts }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Workout Type</th>
            <th>Minutes</th>
          </tr>
        </thead>
        <tbody>
          {currentWorkouts.map((workout, index) => (
            <tr key={index}>
              <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
              <td>{workout.name}</td>
              <td>{workout.type}</td>
              <td>{workout.minutes}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Component */}
      <PaginationComponent
        totalItems={workouts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default WorkoutTable;
