import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="border p-4 rounded mb-2">
    <h3 className="font-bold">{name}</h3>
    <p>{email}</p>
    <p>
      {address.street}, {address.city}
    </p>
  </div>
);

export default UserCard;
