"use client";

import { ReactNode } from "react";

interface Column<T> {
  key: keyof T | string;
  title: string;
  align?: "left" | "center" | "right";
  render?: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export default function DataTable<T>({
  columns,
  data,
  emptyMessage = "No hay registros disponibles.",
}: DataTableProps<T>) {

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">

      <table className="w-full">

        <thead className="bg-zinc-800">

          <tr>

            {columns.map((column) => (

              <th
                key={String(column.key)}
                className={`
                  px-6
                  py-4
                  uppercase
                  text-sm
                  text-zinc-300
                  ${
                    column.align === "center"
                      ? "text-center"
                      : column.align === "right"
                      ? "text-right"
                      : "text-left"
                  }
                `}
              >
                {column.title}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {data.length === 0 ? (

            <tr>

              <td
                colSpan={columns.length}
                className="py-10 text-center text-zinc-500"
              >
                {emptyMessage}
              </td>

            </tr>

          ) : (

            data.map((item: T, index) => (

              <tr
                key={index}
                className="border-t border-zinc-800 hover:bg-zinc-800 transition"
              >

                {columns.map((column) => (

                  <td
                    key={String(column.key)}
                    className={`
                      px-6
                      py-4
                      text-white
                      ${
                        column.align === "center"
                          ? "text-center"
                          : column.align === "right"
                          ? "text-right"
                          : "text-left"
                      }
                    `}
                  >

                    {column.render
                      ? column.render(item)
                      : String(
                          item[column.key as keyof T] ?? ""
                        )}

                  </td>

                ))}

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}