import React from "react";
import { Button } from "@mui/material";

const BorderButton = (
    { 
        name = "", 
        type = "", 
        onClick = () => { }, 
        themeType = "primary", 
        className = "", 
        id = "", 
        disabled,
        variant="contained"
    }) => {



    return (
        <>
            <Button
                variant={variant}
                id={id}
                className={`${className}`}
                type={type}
                onClick={onClick}
                disabled={disabled}
                color={themeType}
            >
                {name}
            </Button>
        </>
    );
};

export default BorderButton;