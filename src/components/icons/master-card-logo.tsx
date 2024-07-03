import React from 'react'

const MasterCardLogo = ({ fillColor }: { fillColor: string }) => {

    return (
        <svg
            viewBox="0 0 44 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='w-[27px] h-[18px] xl:w-[44px] xl:h-[40px]'
        >
            <circle cx="15" cy="15" r="15" fillOpacity="0.5"
                className={fillColor}
            />
            <circle cx="29" cy="15" r="15" fillOpacity="0.5"
                className={fillColor}
            />
        </svg>

    )
}

export default MasterCardLogo