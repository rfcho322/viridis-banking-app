import React from 'react'

const ShoppingBag = ({ IconColor }: { IconColor: string }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-bag"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                className={IconColor}
            />
            <path d="M3 6h18"
                className={IconColor}
            />
            <path d="M16 10a4 4 0 0 1-8 0"
                className={IconColor}
            />
        </svg>
    )
}

export default ShoppingBag