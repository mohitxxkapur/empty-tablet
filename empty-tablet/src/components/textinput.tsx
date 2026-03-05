"use client";

import  "./textinput.css";

type textBoxProps ={
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onEnter?: (value: string) => void;
    className?: string;
};

export default function TextInput({
    label,
    placeholder,
    value,
    onChange,
    className, 
    onEnter
}: textBoxProps) {
    return (
        <div className={`textbox-row ${className || ""}`}>
            <span className= "textbox-label">{label}:</span>

            <input
                className= "textbox-field"
                type= "text"
                placeholder={placeholder}
                value= {value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && onEnter) {
                        onEnter(value);
                    }
                }}   
            />
        </div>
    );
}