const Entertainment = ({ IconColor }: { IconColor: string }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-popcorn"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
                className={IconColor}
            />
            <path d="M10 22 9 8"
                className={IconColor}
            />
            <path d="m14 22 1-14"
                className={IconColor}
            />
            <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
                className={IconColor}
            />
        </svg>
    )
}

export default Entertainment