export interface ApiTodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodosApiResponse {
  todos: ApiTodo[];
  total: number;
  skip: number;
  limit: number;
}

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  source: 'dummyjson-api';
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  count?: number;
  total?: number;
  timestamp: string;
  error?: string;
}