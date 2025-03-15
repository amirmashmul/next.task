"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "@/lib/redux/userSlice";
import { IoClose } from "react-icons/io5"; // Import the close icon

export default function UserModal() {
  const { selectedUser, isModalOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  return (
    <div className="fixed z-50 max-h-screen flex items-center justify-center bg-opacity-75 bg-[#0000009c] inset-0">
      <div className="bg-white absolute top-[85px] rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">{selectedUser.name}</h3>
          <button
            onClick={() => dispatch(toggleModal())}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose className="h-6 w-6" /> {/* Use the React icon here */}
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <p className="mt-1 text-gray-800">{selectedUser.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Phone</label>
            <p className="mt-1 text-gray-800">{selectedUser.phone}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Address</label>
            <p className="mt-1 text-gray-800">
              {selectedUser.address.street}, {selectedUser.address.city}
            </p>
          </div>
        </div>
    
      </div>
    </div>
  );
}