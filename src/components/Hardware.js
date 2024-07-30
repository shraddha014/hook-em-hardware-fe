import { useEffect, useState } from 'react';
import './Hardware.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Hardware() {

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:5000/hardware').then(res=>res.json()).then(data => {
    //         console.log(data);
    //         setFormData({
    //             ...data
    //         })
    //     });
    // },[]);

    const [formData, setFormData] = useState({
        projectId: '',
        capacity: '',
        availability: '',
        request: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const chekcIn = () => {
        console.log(formData);
    }

    return (
        <div className="hardware-container">
        <h2>Resource Management</h2>
        <Form className='form'>
                <Form.Group className="mb-3" controlId="formProjectId">
                    <Form.Select 
                    aria-label="Default select example" 
                    name="projectId"
                    value={formData.projectId}
                    onChange={handleChange}>
                    <option>Select Project Id</option>
                    <option value="1">PID:1</option>
                    <option value="2">PID:2</option>
                    <option value="3">PID:3</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCapacity">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control 
                    type="text" 
                    readOnly 
                    placeholder="0" 
                    name="capacity" 
                    value={formData.capacity} 
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAvailability">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control 
                    type="text" 
                    readOnly 
                    placeholder="0" 
                    name="availability"
                    value={formData.availability} 
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRequest">
                    <Form.Label>Request</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="0" 
                    name="request"
                    value={formData.request}
                    onChange={handleChange} />
                </Form.Group>
                <Button className='m-2' variant="primary" type="button" onClick={chekcIn}>
                    Check In
                </Button>
                <Button variant="primary" type="button">
                    Check Out
                </Button>
            </Form>
        </div>
    );
}

export default Hardware;
