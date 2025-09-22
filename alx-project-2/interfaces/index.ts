export interface CardProps {
    title: string;
    content: string;
  }
export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    children: React.ReactNode;
  }
export interface PostProps {
    userId: number;
    title: string;
    body: string;
  }
export interface UserProps {
    id?: number;
    name: string;
    email: string;
    address: { city: string; street: string };
  }
export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
  }
  