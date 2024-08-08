import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Hardware.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function Hardware() {
  const location = useLocation();
  const { project_id } = location.state || {};
  const [hardwareList, setHardwareList] = useState([]);
  const [hardwareRequests, setHardwareRequests] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHardwareData();
  }, []);

  const fetchHardwareData = async () => {
    try {
      const response = await fetch(
        "https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/get-hardware"
      );
      const data = await response.json();
      setHardwareList(data);
      const initialRequests = data.reduce((acc, hardware) => {
        acc[hardware.hardware_id] = ""; // Initialize with empty string
        return acc;
      }, {});
      setHardwareRequests(initialRequests);
    } catch (err) {
      console.error("Error fetching hardware data:", err);
      setError("Failed to fetch hardware data");
    }
  };

  const handleCheckIn = async () => {
    setError("");
    const requestData = Object.keys(hardwareRequests)
      .filter((hardware_id) => hardwareRequests[hardware_id]) // Only include non-empty requests
      .map((hardware_id) => ({
        hardware_id,
        project_id: project_id,
        request: hardwareRequests[hardware_id],
      }));

    if (requestData.length === 0) {
      setError(
        "Please provide request quantities for at least one hardware item"
      );
      return;
    }
    console.log("request", requestData);
    try {
      const response = await fetch(
        "https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/set-check-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const result = await response.json();
      console.log("result", result);
      if (response.ok) {
        fetchHardwareData(); // Refresh hardware data
        setError("");
      } else {
        fetchHardwareData();
        setError(result.errors);
      }
    } catch (err) {
      console.error("Error during check-in:", err);
      setError("Failed to check in hardware");
    }
  };

  const handleCheckOut = async () => {
    setError("");
    const requestData = Object.keys(hardwareRequests)
      .filter((hardware_id) => hardwareRequests[hardware_id]) // Only include non-empty requests
      .map((hardware_id) => ({
        hardware_id,
        project_id: project_id,
        request: hardwareRequests[hardware_id],
      }));

    if (requestData.length === 0) {
      setError(
        "Please provide request quantities for at least one hardware item"
      );
      return;
    }

    try {
      const response = await fetch(
        "https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/set-check-out",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        fetchHardwareData(); // Refresh hardware data
        setError("");
      } else {
        fetchHardwareData();
        setError(result.errors[0]);
      }
    } catch (err) {
      console.error("Error during check-out:", err);
      setError("Failed to check out hardware");
    }
  };

  const handleRequestChange = (hardware_id, value) => {
    setHardwareRequests((prev) => ({
      ...prev,
      [hardware_id]: value,
    }));
  };

  return (
    <div className="hardware-container">
      <h2>Resource Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="form">
        {hardwareList.map((hardware) => (
          <Form.Group key={hardware.hardware_id} className="mb-3">
            <Form.Label>Hardware {hardware.hardware_id}</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={`Capacity: ${hardware.capacity}`}
            />
            <Form.Control
              type="text"
              readOnly
              value={`Availability: ${hardware.availability}`}
            />
            <Form.Control
              type="text"
              placeholder="Enter request quantity"
              value={hardwareRequests[hardware.hardware_id] || ""}
              onChange={(e) =>
                handleRequestChange(hardware.hardware_id, e.target.value)
              }
            />
          </Form.Group>
        ))}
        <Button
          className="m-2"
          variant="primary"
          type="button"
          onClick={handleCheckIn}
        >
          Check In
        </Button>
        <Button variant="primary" type="button" onClick={handleCheckOut}>
          Check Out
        </Button>
      </Form>
    </div>
  );
}

export default Hardware;
