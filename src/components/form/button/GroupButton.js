import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const GroupButton = (
    {
        buttons = [],
        themeType = "primary",
        className = "",
        size = "small", //small,medium,large
        variant = "contained", //contained, outlined, text
        orientation = "horizontal",//horizontal
    }) => {



    return (
        <>
            <ButtonGroup
                variant={variant}
                size={size}
                color={themeType}
                className={`${className}`}
                orientation={orientation}
                aria-label="Basic button group">
                {
                    buttons?.map(button => {
                        return <Button onClick={button.onClick}>{button.name}</Button>
                    })
                }   
            </ButtonGroup>
        </>
    );
};

export default GroupButton;