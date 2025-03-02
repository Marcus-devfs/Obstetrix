import React from 'react'

type Column<T> = {
    id: string
    header: React.ReactNode
    cell: (props: { row: { original: T } }) => React.ReactNode
}

type TableProps<T> = {
    columns: Column<T>[]
    data: T[]
}

export const Table = <T,>({ columns, data }: TableProps<T>) => {
    return (
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl">
            <div className=" overflow-x-auto">
                <table className="w-full mt-4 text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th
                                    key={`${col.id}-${index}`}
                                    className="p-4 border-y border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700"
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, rowIndex) => (
                            <tr
                                key={`${rowIndex}-${item}`}
                                className="border-b border-gray-100 hover:bg-gray-50"
                            >
                                {columns.map((col, index) => (
                                    <td
                                        key={`${col.id}-${index}-${rowIndex}`}
                                        className="p-4 text-sm text-gray-700"
                                    >
                                        {col.cell({ row: { original: item } })}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
