
const Table = ({ columns, data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white  border border-gray-200 ">
          <thead className="bg-gray-50 ">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500  uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50  transition-colors">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 "
                  >
                    {column.Cell ? column.Cell({ row }) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  