import { Injectable } from '@nestjs/common'
import { TodoDto, CreateTodoDto, UpdateTodoDto } from './dto'
import { STATUS } from './types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: TodoDto[] = [
    {
        id: uuidv4(),
        title: 'Learn NestJS',
        description: null,
        status: STATUS.TODO,
        isFavorite: false,  
    },
    {
        id: uuidv4(),
        title: 'Learn TypeScript',
        description: null,
        status: STATUS.TODO,
        isFavorite: false,  
    },
    {
        id: uuidv4(),
        title: 'Learn React',
        description: null,
        status: STATUS.TODO,
        isFavorite: false,  
    }
  ];
 
  getAllTodos(): TodoDto[] {
    console.log(1)
    return this.todos
  }

  getTodoByStatus(status: STATUS): TodoDto[] {
    return this.todos.filter((todo) => todo.status === status)
  } 

  getById(id: string): TodoDto | null {
    return this.todos.find((todo) => todo.id === id) || null;
  }

  create({title, description}: CreateTodoDto) {
    const todo = {
        id: uuidv4(),
        title,
        description,
        status: STATUS.TODO,
        isFavorite: false,
    }

    this.todos.push(todo);
    return todo;
  }

  update(id: string, data: UpdateTodoDto) {
    this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, ...data } : todo,
      );

    return {id, ...data};
  }

  delete(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
