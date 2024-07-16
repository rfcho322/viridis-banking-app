import { cn } from '@/lib/utils'
import React from 'react'

const SettingsTabItem = ({ label, activeTab }: { label: string; activeTab: string }) => {
    const isActive = label === activeTab;

    return (
        <div
            className={cn(`gap-[18px] border-b-[3px] flex px-2 sm:px-4 py-2 transition-all`, {
                ' border-green-500': isActive,
            })}
        >
            <p
                className={cn(`text-sm xl:text-base line-clamp-1 flex-1 font-medium text-[#343C6A]`, {
                    ' text-green-500': isActive
                })}
            >
                {label}
            </p>
        </div>
    )
}

export default SettingsTabItem