import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const TransactionsTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px] text-[#718EBF]">Invoice</TableHead>
                    <TableHead className="text-[#718EBF]">Status</TableHead>
                    <TableHead className="text-[#718EBF]">Method</TableHead>
                    <TableHead className="text-right text-[#718EBF]">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}

export default TransactionsTable