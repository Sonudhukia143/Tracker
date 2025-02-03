import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Container } from 'react-bootstrap';

const WorkoutChart = ({ data }) => {
  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-center">
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="minutes" fill="#8884d8" />
        </BarChart>
      </div>
    </Container>
  );
};

export default WorkoutChart;
