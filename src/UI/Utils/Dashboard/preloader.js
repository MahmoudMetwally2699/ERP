import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./dashboard.css"; // Create a CSS file for styling

const Preloader = () =>
{
    return (
        <div className="preloader-container">
            <CircularProgress color="secondary" />
            <p>Loading...</p>
        </div>
    );
};

export default Preloader;
