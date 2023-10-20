import "./Checkbox.scss";
import { InputHTMLAttributes } from "react"

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps) => {
    return (
        <div className="container_checkbox">
            <input {...props} type="checkbox" className="checkbox" />
            <span className="checkmark"/>
        </div>
    )
}