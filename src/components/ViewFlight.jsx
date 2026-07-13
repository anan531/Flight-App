import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewFlight = () => {

    const [flights, setFlights] = useState([]);

    const fetchData = () => {
        axios
            .get("https://host-demo-app.onrender.com/api/flights")
            .then((response) => {
                setFlights(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">

                {flights.map((flight) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                        key={flight.id}
                    >
                        <div className="card shadow h-100">
                            <div className="card-body">

                                <h5 className="card-title text-primary">
                                    {flight.airline}
                                </h5>

                                <h6 className="card-subtitle mb-3 text-muted">
                                    Flight No: {flight.flight_number}
                                </h6>

                                <p className="card-text">
                                    <strong>Origin:</strong> {flight.origin}
                                </p>

                                <p className="card-text">
                                    <strong>Destination:</strong> {flight.destination}
                                </p>

                                <p className="card-text">
                                    <strong>Date:</strong> {flight.departure_date}
                                </p>

                                <p className="card-text">
                                    <strong>Departure:</strong> {flight.departure_time}
                                </p>

                                <p className="card-text">
                                    <strong>Arrival:</strong> {flight.arrival_time}
                                </p>

                                <p className="card-text">
                                    <strong>Fare:</strong> ₹{flight.fare}
                                </p>

                                <p className="card-text">
                                    <strong>Total Seats:</strong> {flight.total_seats}
                                </p>

                                <p className="card-text">
                                    <strong>Available Seats:</strong> {flight.available_seats}
                                </p>

                                <p className="card-text">
                                    <strong>Status:</strong> {flight.status}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ViewFlight;