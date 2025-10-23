import React from "react";
import { Button } from 'react-bootstrap';


const WeatherButton = () => {
    return (
        <div className="button-group">
            <Button variant="warning">Japan</Button>
            <Button variant="warning">Hawaii</Button>
            <Button variant="warning">Hungary</Button>
            <Button variant="warning">Current Location</Button>
        </div>
    )
}

export default WeatherButton;
