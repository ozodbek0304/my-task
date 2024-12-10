import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '../ui/dropdown-menu';
import { ArrowUpDown } from 'lucide-react';

type Column = {
    key: string;
    label: string;
    render?: (value: any, row: { [key: string]: any }) => React.ReactNode;

};

type Props = {
    columns: Column[];
    data: { [key: string]: any }[];
    isDropdown?: boolean;
    dropdownOptions?: { id: number, label: string; icon: any }[];
}

const DataTable = ({ data, columns, isDropdown, dropdownOptions }: Props) => {


    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead className='font-bold text-blue-400' key={column.key} >
                            <div className='flex  items-center gap-2'>
                                {column.label}
                                {isDropdown && column.label === "TYPE" && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <span className="cursor-pointer">
                                                <ArrowUpDown className='w-5 h-4 font-bold' />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {dropdownOptions?.map((option) => (
                                                <DropdownMenuItem
                                                    key={option.id}
                                                >
                                                    <option.icon className={`h-9 w-9 text-yellow-500`} />
                                                    {option.label}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                            </div>
                        </TableHead>

                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.length > 0 && data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column) => (
                            <TableCell key={column.key}>
                                {column.render
                                    ? column.render(row[column.key], row)
                                    : row[column.key]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable