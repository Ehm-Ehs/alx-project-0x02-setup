export interface CardProps {
    title: string;
    content: string;
  }
  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md";
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
  