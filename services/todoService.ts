import { apiClient } from './api';
import { ApiTodo, TodosApiResponse } from '@/types/api-todo';

export interface FetchTodosParams {
  limit?: number;
  skip?: number;
}

export interface CreateTodoInput {
  todo: string;
  completed: boolean;
  userId: number;
}

export const todoService = {
  async fetchTodos(params: FetchTodosParams = { limit: 15, skip: 0 }): Promise<TodosApiResponse> {
    const { limit = 15, skip = 0 } = params;
    return apiClient<TodosApiResponse>(`/todos?limit=${limit}&skip=${skip}`);
  },

  async fetchTodoById(id: number | string): Promise<ApiTodo> {
    return apiClient<ApiTodo>(`/todos/${id}`);
  },

  async createTodo(payload: CreateTodoInput): Promise<ApiTodo> {
    return apiClient<ApiTodo>('/todos/add', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async updateTodoStatus(id: number | string, completed: boolean): Promise<ApiTodo> {
    return apiClient<ApiTodo>(`/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ completed }),
    });
  },

  async deleteTodo(id: number | string): Promise<{ id: number; isDeleted: boolean; deletedOn: string }> {
    return apiClient<{ id: number; isDeleted: boolean; deletedOn: string }>(`/todos/${id}`, {
      method: 'DELETE',
    });
  },
};