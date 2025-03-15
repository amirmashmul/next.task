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
  const [searchQuery, setSearchQuery] = useState("");

  const handleRowClick = (user) => {
    dispatch(setSelectedUser(user));
    dispatch(toggleModal());
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || emailMatch;
  });

  const columns = [
    {
      header: "id",
      accessor: "id",
      Cell: ({ row }) => <span>{row.id}</span>,
    },
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
    <div className="p-[20px] my-[50px] flex justify-center items-center">
     <div className="flex flex-col">
      <SearchBar
       searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
        />
      <div className="bg-white mt-2  rounded-lg shadow-lg overflow-hidden">
        <Table
          columns={columns}
          data={filteredUsers}
          onRowClick={handleRowClick}
        />
      </div>
      </div>
    </div>
  );
}