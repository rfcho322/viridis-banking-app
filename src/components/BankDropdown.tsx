"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select";
import { formUrlQuery, formatAmount } from "@/lib/utils";
import { CreditCard } from "lucide-react";

export const BankDropdown = ({
    accounts = [],
    setValue,
    otherStyles,
}: BankDropdownProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selected, setSeclected] = useState(accounts[0]);

    const handleBankChange = (id: string) => {
        const account = accounts.find((account) => account.appwriteItemId === id)!;

        setSeclected(account);
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "id",
            value: id,
        });
        router.push(newUrl, { scroll: false });

        if (setValue) {
            setValue("senderBank", id);
        }
    };

    return (
        <Select
            defaultValue={selected.id}
            onValueChange={(value) => handleBankChange(value)}
        >
            <SelectTrigger
                className={`flex w-full bg-white gap-3 md:w-[300px] ${otherStyles}`}
            >
                <CreditCard className="w-5 h-5 text-green-500" />
                <p className="line-clamp-1 w-full text-left">{selected.name}</p>
            </SelectTrigger>
            <SelectContent
                className={`w-full bg-white md:w-[300px] ${otherStyles}`}
                align="end"
            >
                <SelectGroup>
                    <SelectLabel className="py-2 font-normal text-gray-500">
                        Select a bank to display
                    </SelectLabel>
                    {accounts.map((account: Account) => (
                        <SelectItem
                            key={account.id}
                            value={account.appwriteItemId}
                            className="cursor-pointer border-t"
                        >
                            <div className="flex flex-col ">
                                <p className="text-16 font-medium">{account.name}</p>
                                <p className="text-14 font-medium text-green-600">
                                    {formatAmount(account.currentBalance)}
                                </p>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};