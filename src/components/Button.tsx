import React from "react";

type ButtonProps = {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ">
            {title}
        </button>
    )
}

export default Button;