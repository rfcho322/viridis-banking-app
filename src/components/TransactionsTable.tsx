'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
import { usePathname } from "next/navigation"

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    const {
        borderColor,
        backgroundColor,
        textColor,
        chipBackgroundColor
    } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default

    return (
        <div className={cn('flex items-center justify-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2', borderColor, chipBackgroundColor)}>
            <div className={cn('size-2 rounded-full', backgroundColor)} />
            <p className={cn('text-base font-medium first-letter:capitalize lowercase', textColor)}>
                {
                    category === 'FOOD_AND_DRINK' ? 'FOOD AND DRINK'
                        : category === 'LOAN_PAYMENTS' ? 'LOAN PAYMENTS'
                            : category === 'Transfer' ? 'TRANSFER'
                                : category
                }
            </p>
        </div>
    )
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {

    const pathName = usePathname()
    const isDashboard = !pathName.startsWith('/transactions')

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-base text-[#718EBF]">Transaction</TableHead>
                    <TableHead className="text-base text-[#718EBF]">Amount</TableHead>
                    <TableHead className="text-base text-[#718EBF]">Status</TableHead>
                    <TableHead className={cn("text-base text-[#718EBF]", {
                        'hidden': isDashboard
                    })}>
                        Date
                    </TableHead>
                    <TableHead className={cn("text-base text-[#718EBF]", {
                        'hidden': isDashboard
                    })}>
                        Channel
                    </TableHead>
                    <TableHead className="text-base text-[#718EBF] max-md:hidden">Category</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((t: Transaction) => {
                    const status = getTransactionStatus(new Date(t.date))
                    const amount = formatAmount(t.amount)

                    const isDebit = t.type === 'debit'
                    const isCredit = t.type === 'credit'

                    return (
                        <TableRow
                            key={t.id}
                            className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}
                        >
                            <TableCell className={cn('max-w-[175px] pl-2 pr-10', {
                                'max-w-[200px]': !isDashboard
                            })}>
                                <div className='flex items-center gap-3'>
                                    <h1 className='text-base truncate font-semibold text-[#344054]'>
                                        {removeSpecialCharacters(t.name)}
                                    </h1>
                                </div>
                            </TableCell>

                            <TableCell
                                className={`pl-2 pr-10 text-base font-semibold ${isDebit || amount[0] === '-' ? 'text-[#f04438]' : 'text-[#039855]'}`}>
                                {isDebit ? `-${amount}` : isCredit ? amount : amount}
                            </TableCell>

                            <TableCell className='pl-2 pr-10'>
                                <CategoryBadge category={status} />
                            </TableCell>

                            <TableCell className={cn('min-w-32 text-base pl-2 pr-10', {
                                'hidden': isDashboard
                            })}>
                                {formatDateTime(new Date(t.date)).dateTime}
                            </TableCell>

                            <TableCell className={cn('min-w-24 text-base capitalize', {
                                'hidden': isDashboard
                            })}>
                                {t.paymentChannel}
                            </TableCell>

                            <TableCell className='max-md:hidden pl-2 pr-10'>
                                <CategoryBadge category={t.category} />
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>

    )
}

export default TransactionsTable