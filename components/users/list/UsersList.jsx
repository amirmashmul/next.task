
"use client";

import { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { setSelectedUser, toggleModal } from "@/lib/redux/userSlice";


//components
import Table from "@/components/common/Table";

export default function UsersTable({ users }) {
  const dispatch = useDispatch();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleRowClick = (user) => {
    dispatch(setSelectedUser(user));
    dispatch(toggleModal());
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Define columns for the Table component
  const columns = [
    {
      header: "Name",
      accessor: "name",
      Cell: ({ row }) => <span>{row.name}</span>,
    },
    {
      header: "Email",
      accessor: "email",
      Cell: ({ row }) => <span>{row.email}</span>,
    },
    {
      header: "Username",
      accessor: "username",
      Cell: ({ row }) => <span>{row.username}</span>,
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        data={sortedUsers}
        onRowClick={handleRowClick} // Pass the row click handler
      />
    </div>
  );
}
