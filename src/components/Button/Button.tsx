import "./Button.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "success" | "warning" | "error" | "disabled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: Variant;
    icon: ReactNode;
};

export const Button = ({ icon, variant, ...props }: ButtonProps) => {
    return (
        <button className={`button ${variant}`} {...props}>
            {icon}
        </button>
    );
};