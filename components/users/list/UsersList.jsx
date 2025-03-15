"use client";

import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setSelectedUser, toggleModal } from "@/lib/redux/userSlice";

// Components
import Table from "@/components/users/table/Table";
import SearchBar from "../search/SearchBar";

export default function UsersTable({ users }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleRowClick = (user) => {
    dispatch(setSelectedUser(user));
    dispatch(toggleModal());
  };

  // Filter users by name or email based on the search query
  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || emailMatch;
  });

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
    <div className="p-[60px]">
      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Table */}
      <Table
        columns={columns}
        data={filteredUsers}
        onRowClick={handleRowClick}
      />
    </div>
  );
}