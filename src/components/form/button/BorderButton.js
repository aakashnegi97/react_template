import React from "react";
import borderButtonClass from "../../../utils/customClasses/borderButton";

const BorderButton = ({ label = "", name = "", type = "", onClick = () => { }, themeType = "primary", className = "", id = "", startEndorsement, endEndorsement, disabled }) => {



    return (
        <button
            name={name}
            id={id}
            className={`${disabled ? "" : "color-spread-button relative"} ${borderButtonClass({ disabled })[themeType]} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="flex items-center gap-2">
                {startEndorsement ? startEndorsement : null}
                <span className="flex-grow text-center">{label}</span>
            </span>
            {endEndorsement ? endEndorsement : null}
        </button>
    );
};

export default BorderButton;