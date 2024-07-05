import React from 'react'
import CountUp from 'react-countup'

const AmountCounter = ({ amount }: { amount: number }) => {
    return (
        <div>
            <CountUp
                end={amount}
                decimals={2}
                prefix='$'
            />
        </div>
    )
}

export default AmountCounter