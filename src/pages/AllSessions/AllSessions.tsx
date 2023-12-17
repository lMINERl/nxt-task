import React from "react";
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";
import { TableProps, TCell } from "../../components/Table/Table";
import { useAppDispatch, useAppSelector } from "../../store";

import { GetAllSessionsThunk } from "../../store/thunk/sessionsThunk";

const data = [
  { id: "x", name: "x", date: "x", time: "x", venu: "x" },
  { id: "y", name: "y", date: "y", time: "y", venu: "y" },
];

const AllSessions = () => {
  const dispatch = useAppDispatch();
  const res = useAppSelector((s) => s.sessions.data);

  React.useEffect(() => {
    dispatch(GetAllSessionsThunk());
  }, []);

  React.useEffect(() => {
    console.log(res);
  }, [res]);

  const columns: TableProps<(typeof res)["sessions"]>["columns"] = [
    {
      name: "Session Name",
      field: "title",
      headStyle: "justify-center",
      customCell: (data) => {
        return (
          <td
            key={data.id}
            className={`flex flex-grow items-center bg-gray-700 max-h-[6.5rem] justify-start pl-md2 mr-auto py-sm0`}
          >
            <div className="w-[34px] h-[34px]"></div>
            <div className="ml-xs1 text-gray-50">{data.title}</div>
          </td>
        );
      },
    },
    {
      name: "Date",
      field: "date",
      cellStyle: "justify-center text-gray-200",
      headStyle: "justify-center",
    },
    {
      name: "Time",
      field: "from",
      cellStyle: "justify-center text-gray-200",
      headStyle: "justify-center",
    },
    {
      name: "Venue",
      field: "venue",
      headStyle: "justify-center",
      customCell: (data) => {
        return (
          <TCell classes="justify-center text-gray-200">
            {data.venue.name}
          </TCell>
        );
      },
    },
  ];

  return (
    <>
      <PageTitle name="All Sessions"></PageTitle>
      <div className="ml-sm0 mr-lg1">
        <Table
          extractKey={(data) => data.id.toString()}
          data={res.sessions}
          columns={columns}
          total={res.count}
        />
      </div>
    </>
  );
};

export default AllSessions;
