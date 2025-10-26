// Common types for the application

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  projectId?: string;
  tags: string[];
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  todoCount: number;
}

export interface Filter {
  id: string;
  name: string;
  type: "all" | "completed" | "pending" | "priority" | "project" | "tag" | "date";
  value?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  defaultView: "list" | "grid" | "kanban";
  showCompleted: boolean;
  sortBy: "createdAt" | "dueDate" | "priority" | "title";
  sortOrder: "asc" | "desc";
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  className?: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface TodoFormData {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  projectId?: string;
  tags: string[];
}

export interface ProjectFormData {
  name: string;
  description?: string;
  color: string;
}

// Utility types
export type Status = "idle" | "loading" | "success" | "error";

export type SortOption = {
  field: keyof Todo;
  direction: "asc" | "desc";
  label: string;
};
