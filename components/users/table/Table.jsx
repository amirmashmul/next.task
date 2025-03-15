

const Table = ({ columns, data, onRowClick }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className="p-3 text-left">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={() => onRowClick(row)}
            className="hover:bg-gray-100 cursor-pointer"
          >
            {columns.map((column) => (
              <td key={column.accessor} className="p-3 border-t">
                {column.Cell ? column.Cell({ row }) : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;