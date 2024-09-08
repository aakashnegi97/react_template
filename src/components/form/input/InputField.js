import React from "react";
import { TextField } from "@mui/material";

const InputField = (
    {
        label = "",
        value = "",
        type = "",
        onChange = () => { },
        themeType = "primary",
        className = "",
        id = "",
        disabled,
        variant = "standard", // standard, filled, outlined
        focused,
        size = "small", // small, normal
    }) => {

    const rest = {
        label: label,
        id: id,
        value: value,
        onChange: onChange,
        type: type,
        variant: variant,
        disabled: disabled,
        color: themeType,
        focused: focused,
        size: size
    }

    return (
        <>
            <TextField
                className={`${className}`}
                {...rest}
            />
        </>
    );
};

export default InputField;