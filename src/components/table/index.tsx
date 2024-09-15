import React from 'react';

interface TableProps<T> {
  data: T[];
  columns: {
    label: string;
    accessor: keyof T;
  }[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto border-collapse'>
        <thead>
          <tr className='bg-gray-200'>
            {columns.map((column) => (
              <th key={column.label} className='px-4 py-2 border'>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className='hover:bg-gray-100'>
                {columns.map((column) => (
                  <td
                    key={column.accessor.toString()}
                    className='px-4 py-2 border'
                  >
                    {row[column.accessor] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className='text-center py-4'>
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
