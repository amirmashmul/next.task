

"use client";

//redux

import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "@/lib/redux/userSlice";

export default function UserModal() {
  const { selectedUser, isModalOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{selectedUser.name}</h3>
        <p>Email: {selectedUser.email}</p>
        <p>Phone: {selectedUser.phone}</p>
        <p>Address: {selectedUser.address.street}, {selectedUser.address.city}</p>
        <div className="modal-action">
          <button onClick={() => dispatch(toggleModal())} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}