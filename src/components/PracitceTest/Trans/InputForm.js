import React from "react";
export default function InputForm({ value, onChange, onSubmit, placeholder }) {
    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </form>
    );
}
