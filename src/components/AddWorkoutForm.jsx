import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { handleChange,handleSubmit } from "../utils/formFunctions.js";

const AddWorkoutForm = ({ addWorkout }) => {
  const [formData,setFormData] = useState({
    name:"",
    type:"",
    minutes:""
  });

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white text-center">
              <h5 className="mb-0">Add Workout</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => handleSubmit(e,addWorkout,setFormData,formData)}>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange(e,setFormData,formData)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Workout Type</Form.Label>
                  <Form.Select
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleChange(e,setFormData,formData)}
                    required
                  >
                    <option value="">Select Workout</option>
                    <option value="Running">Running</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Yoga">Yoga</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Minutes</Form.Label>
                  <Form.Control
                    id="minutes"
                    type="number"
                    placeholder="Enter minutes"
                    value={formData.minutes}
                    onChange={(e) => handleChange(e,setFormData,formData)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button type="submit" variant="primary">
                    Add Workout
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddWorkoutForm;
