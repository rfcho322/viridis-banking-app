import React from 'react'

const Utensils = ({ IconColor }: { IconColor: string }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-utensils"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
                className={IconColor}
            />
            <path d="M7 2v20"
                className={IconColor}
            />
            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
                className={IconColor}
            />
        </svg>
    )
}

export default Utensils