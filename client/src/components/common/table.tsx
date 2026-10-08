import * as React from "react";

export interface Column<T = any> {
  id?: string | number;
  title: string;
  value: keyof T | string;
  render?: (row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface TableProps<T = any> {
  data?: T[];
  column?: Column<T>[];
  className?: string;
  containerClassName?: string;
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  getRowKey?: (row: T, index: number) => string | number;
}

function Table<T extends Record<string, any>>({
  data = [],
  column = [],
  className,
  containerClassName,
  emptyMessage = "No data available",
  onRowClick,
  getRowKey,
}: TableProps<T>) {
  return (
    <div
      data-slot="table-container"
      className={`relative w-full overflow-x-auto ${containerClassName ?? ""}`}
    >
      <table
        data-slot="table"
        className={`w-full caption-bottom text-sm ${className ?? ""}`}
      >
        <thead
          data-slot="table-header"
          className="border-b border-secondary/20 bg-secondary/15"
        >
          <tr data-slot="table-row">
            {column.map((col, idx) => (
              <th
                key={col.id ?? String(col.value) ?? idx}
                data-slot="table-head"
                className={`h-11 px-4 text-left align-middle font-semibold text-white/90 whitespace-nowrap text-xs uppercase tracking-wider ${col.headerClassName ?? ""}`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody data-slot="table-body">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={Math.max(column.length,1)}
                className="p-8 text-center text-sm text-zinc-400"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const rowKey = getRowKey
                ? getRowKey(row, rowIndex)
                : row.id ?? rowIndex;

              return (
                <tr
                  key={rowKey}
                  data-slot="table-row"
                  onClick={() => onRowClick?.(row, rowIndex)}
                  className={`border-b border-secondary/10 transition-colors hover:bg-secondary/10 ${
                    onRowClick ? "cursor-pointer" : ""
                  }`}
                >
                  {column.map((col, colIndex) => {
                    const colKey = col.id ?? String(col.value) ?? colIndex;
                    const cellValue = row[col.value as string];

                    return (
                      <td
                        key={colKey}
                        data-slot="table-cell"
                        className={`p-4 align-middle whitespace-nowrap text-sm text-zinc-200 ${col.className ?? ""}`}
                      >
                        {col.render
                          ? col.render(row, rowIndex)
                          : cellValue !== undefined && cellValue !== null
                          ? String(cellValue)
                          : "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
export { Table };
