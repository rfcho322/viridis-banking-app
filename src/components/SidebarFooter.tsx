import React from 'react'
import PlaidButton from './PlaidButton'

const SidebarFooter = ({ user }: SidebarFooterProps) => {
    return (
        <footer className='w-full px-3 pb-3'>
            <PlaidButton user={user} />
        </footer>
    )
}

export default SidebarFooter