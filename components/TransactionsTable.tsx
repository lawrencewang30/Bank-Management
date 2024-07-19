import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from '@/lib/utils'
import { transactionCategoryStyles } from '@/constants'
import { text } from 'stream/consumers'

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    const {
        borderColor,
        backgroundColor,
        textColor,
        chipBackgroundColor
    } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default  // extract css styling from index.ts file
    return (
        <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
            <div className={cn('size-2 rounded-full', backgroundColor)} />
                <p className={cn('text-[15px] font-medium', textColor)}>
                    {category}
                </p>
        </div>
    )
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
        <TableHeader className='bg-[#f9fafb]'>
            <TableRow>
            <TableHead className="text-[15px] px-2">Transaction</TableHead>
            <TableHead className="text-[15px] px-2">Amount</TableHead>
            <TableHead className="text-[15px] px-2">Status</TableHead>
            <TableHead className="text-[15px] px-2">Date</TableHead>
            <TableHead className="text-[15px] px-2 max-md:hidden">Channel</TableHead>
            <TableHead className="text-[15px] px-2 max-md:hidden">Category</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {transactions.map((t: Transaction) => {
                const status = getTransactionStatus(new Date(t.date))
                const amount = formatAmount(t.amount)

                const isDebit = t.type === 'debit'; // subtracting money
                const isCredit = t.type === 'credit'; // adding money

                return (
                    <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}>
                        <TableCell className='max-w-[250px] pl-2 pr-5'>
                            <div className='flex items-center gap-5'>
                                <h1 className='text-[15px] truncate font-semibold text-[#344054]'>
                                    {removeSpecialCharacters(t.name)}
                                </h1>
                            </div>
                        </TableCell>

                        <TableCell className={`text-[15px] pl-2 pr-10 font-semibold ${isDebit || amount[0] === '-' ? 'text-[#f04438]' : 'text-[#039855]'}`}>
                            {isDebit ? `-${amount}` : isCredit ? amount : amount}
                        </TableCell>

                        <TableCell className='text-[15px] pl-2 pr-10'>
                            <CategoryBadge category={status}/>
                        </TableCell>

                        <TableCell className='text-[15px] min-w-32 pl-2 pr-10'>
                            {formatDateTime(new Date(t.date)).dateTime}
                        </TableCell>

                        <TableCell className='text-[15px] pl-2 pr-10 capitalize min-w-24'>
                            {t.paymentChannel}
                        </TableCell>

                        <TableCell className='text-[15px] pl-2 pr-10 max-md:hidden'>
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
