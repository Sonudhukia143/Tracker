import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddWorkoutForm from '../components/AddWorkoutForm.jsx'; // Adjust path if needed

//moking of functions
const mockAddWorkout = jest.fn();
jest.mock('../utils/formFunctions', () => ({
  handleSubmit: jest.fn(),
  handleChange: jest.fn(),
}));

describe('AddWorkoutForm', () => {
  it('renders the form correctly', () => {
    render(<AddWorkoutForm addWorkout={mockAddWorkout} />);
    
    expect(screen.getByLabelText(/User Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Workout Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Workout/i)).toBeInTheDocument();
  });

  it('fills in form inputs correctly', () => {
    render(<AddWorkoutForm addWorkout={mockAddWorkout} />);
    
    fireEvent.change(screen.getByLabelText(/User Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Workout Type/i), { target: { value: 'Running' } });
    fireEvent.change(screen.getByLabelText(/Minutes/i), { target: { value: 30 } });
    
    expect(screen.getByLabelText(/User Name/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Workout Type/i).value).toBe('Running');
    expect(screen.getByLabelText(/Minutes/i).value).toBe('30');
  });

  it('submits the form and calls addWorkout', async () => {
    render(<AddWorkoutForm addWorkout={mockAddWorkout} />);
    
    fireEvent.change(screen.getByLabelText(/User Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Workout Type/i), { target: { value: 'Running' } });
    fireEvent.change(screen.getByLabelText(/Minutes/i), { target: { value: 30 } });

    fireEvent.click(screen.getByText(/Add Workout/i));

    await waitFor(() => {
      expect(mockAddWorkout).toHaveBeenCalledTimes(1);
      expect(mockAddWorkout).toHaveBeenCalledWith({
        name: 'John Doe',
        type: 'Running',
        minutes: '30',
      });
    });
  });

  it('handles empty inputs and prevents form submission', async () => {
    render(<AddWorkoutForm addWorkout={mockAddWorkout} />);
    
    fireEvent.click(screen.getByText(/Add Workout/i));
    
    await waitFor(() => {
      expect(mockAddWorkout).not.toHaveBeenCalled();
      expect(screen.getByLabelText(/User Name/i).value).toBe('');
      expect(screen.getByLabelText(/Workout Type/i).value).toBe('');
      expect(screen.getByLabelText(/Minutes/i).value).toBe('');
    });
  });
});
