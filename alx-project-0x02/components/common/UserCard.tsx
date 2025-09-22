import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded mb-2">
      <h3 className="font-bold">{name}</h3>
      <p>{email}</p>
      <p>
        {address.street}, {address.city}
      </p>
    </div>
  );
}
