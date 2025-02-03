import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkoutTable from '../components/WorkoutTable.jsx'; // import your component

// Sample data for testing
const sampleWorkouts = [
  { name: 'John Doe', type: 'Running', minutes: 30 },
  { name: 'Jane Smith', type: 'Swimming', minutes: 45 },
  { name: 'Mike Johnson', type: 'Cycling', minutes: 60 },
  { name: 'Sarah Lee', type: 'Yoga', minutes: 40 },
  { name: 'Tom Brown', type: 'Running', minutes: 20 },
  { name: 'Alice Green', type: 'Cycling', minutes: 30 },
  { name: 'Bob White', type: 'Swimming', minutes: 50 },
  { name: 'Nancy Blue', type: 'Yoga', minutes: 60 },
  { name: 'Mark Black', type: 'Running', minutes: 25 },
];

describe('WorkoutTable Component', () => {
  it('renders the table with correct data', () => {
    render(<WorkoutTable workouts={sampleWorkouts} />);
    
    // Check if table headers exist
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Workout Type')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
    
    // Check if first row of data exists
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Running')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('displays only 5 items per page', () => {
    render(<WorkoutTable workouts={sampleWorkouts} />);
    
    // Check that only 5 rows are shown on the first page
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(6); // 1 header row + 5 data rows
    
    // Click on the second page
    fireEvent.click(screen.getByText('2'));
    
    // Check that after pagination, only the next 5 items are shown
    const newRows = screen.getAllByRole('row');
    expect(newRows.length).toBe(6); // 1 header row + 5 data rows on second page
  });
});
