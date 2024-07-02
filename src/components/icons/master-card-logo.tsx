import React from 'react'

const MasterCardLogo = ({ fillColor }: { fillColor: string }) => {
    return (
        <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fillOpacity="0.5"
                className={`fill-${fillColor}`}
            />
            <circle cx="29" cy="15" r="15" fillOpacity="0.5"
                className={`fill-${fillColor}`}
            />
        </svg>

    )
}

export default MasterCardLogo