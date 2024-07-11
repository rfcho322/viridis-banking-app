import React from 'react'

const Transportation = ({ IconColor }: { IconColor: string }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-car-front"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
                className={IconColor}
            />
            <path d="M7 14h.01"
                className={IconColor}
            />
            <path d="M17 14h.01" />
            <rect width="18" height="8" x="3" y="10" rx="2"
                className={IconColor}
            />
            <path d="M5 18v2"
                className={IconColor}
            />
            <path d="M19 18v2"
                className={IconColor}
            />
        </svg>
    )
}

export default Transportation