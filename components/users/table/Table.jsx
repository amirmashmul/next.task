

const Table = ({ columns, data, onRowClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full md:w-[700px]  table-fixed border-collapse ">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="p-3 text-center text-sm font-semibold text-gray-700"
                style={{ width: column.width || "auto" }} // Set fixed width for each column
              >
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
              className="hover:bg-gray-50 cursor-pointer border-b border-gray-200"
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="p-3 text-sm text-center text-gray-700 truncate whitespace-nowrap"
                  style={{ width: column.width || "100%" }} // Match column width
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