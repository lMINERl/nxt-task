/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from "react";

interface TCellProps {
  classes: string;
}
export const TCell = (props: PropsWithChildren<TCellProps>) => {
  return (
    <td className="table-cell">
      <div
        className={` flex items-center bg-gray-700 max-h-[6.5rem] ${
          props.classes ?? ""
        }`}
      >
        {props.children}
      </div>
    </td>
  );
};

export const THead = (props: PropsWithChildren<TCellProps>) => {
  return (
    <th className="table-cell">
      <div
        className={`flex items-center font-regular text-xs text-gray-200 max-h-[4.8rem] ${
          props.classes ?? ""
        }`}
      >
        {props.children}
      </div>
    </th>
  );
};

export interface TableColumnsProps<T extends T[]> {
  name: string;
  field?: keyof T[number];
  hidden?: boolean;
  customCell?: (data: T[number]) => JSX.Element;
  customHead?: (data: TableColumnsProps<T>) => JSX.Element;
  cellStyle?: string;
  headStyle?: string;
}

export interface TableProps<T extends T[]> {
  data: T;
  extractKey: (data: T[number]) => string;
  columns: TableColumnsProps<T>[];
  tableStyle?: string;
  total?: number;
}

function Table<T extends any[]>(props: TableProps<T>) {
  return (
    <table className="w-full table bg-gray-700">
      <thead>
        <tr className="table-row bg-gray-800 h-[4.8rem] border-b-[1px] border-solid border-b-gray-600">
          {props.columns.map((v) => {
            if (v.hidden) {
              return <></>;
            }
            if (v.customHead) {
              return v.customHead(v);
            }
            return (
              <THead
                classes={v.headStyle ?? ""}
                key={(v.field ?? v.name) as string}
              >
                {v.name}
              </THead>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.data?.map((v) => {
          return (
            <tr
              className="w-full table-row bg-gray-700 h-[6.5rem] border-b-[1px] border-solid border-b-gray-600"
              key={props.extractKey(v)}
            >
              {props.columns.map((c) => {
                if (c.hidden) {
                  return <></>;
                }
                if (c.customCell) {
                  return c.customCell(v);
                }
                return (
                  <TCell
                    key={(c.field ?? c.name) as any}
                    classes={c.cellStyle ?? ""}
                  >
                    {v[c.field]}
                  </TCell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot className="w-full bg-primary-700">
        <tr className="table-row">
          <td className="table-cell" colSpan={100}>
            <div className="flex justify-between items-center ">
              <div className="ml-xs1 text-gray-50 py-md0">
                Showing 50 entires of {props.total ?? 0}
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
