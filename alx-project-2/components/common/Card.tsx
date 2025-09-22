import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
