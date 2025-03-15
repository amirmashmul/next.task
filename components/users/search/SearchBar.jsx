"use client";

//icon
import { IoSearch } from "react-icons/io5"; 

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-4 relative">

      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IoSearch
         className="h-5 w-5 text-gray-400" 
         />
      </div>

    
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}