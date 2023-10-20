import { InputHTMLAttributes } from "react";
import "./Input.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
    return (
        <>
            <input {...props} className="input" />
        </>
    );
};