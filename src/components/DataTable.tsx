import React from 'react';

interface DataTableProps {
  headers: string[];
  data: Array<Array<string | number>>;
  caption?: string;
}

const DataTable: React.FC<DataTableProps> = ({ headers, data, caption }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg mb-8">
      <table className="min-w-full bg-white">
        {caption && (
          <caption className="p-4 text-gray-700 font-medium text-left bg-gray-50 border-b">
            {caption}
          </caption>
        )}
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;