import { Injectable } from '@nestjs/common';
import * as objectid from 'objectid';

@Injectable()
export class TodoService {
  private todos: any[] = [];

  create(content: String): any {
    const todo = {
      id: objectid(),
      content,
      isCompleted: false,
    };

    this.todos.push(todo);
    return todo;
  }

  getAllTodos(): any {
    return this.todos;
  }

  getTodoById(id: any) {
    return this.todos.find(i => objectid.equals(i.id, id));
  }

  update(id, content, isCompleted) {
    this.todos = this.todos.map(i =>
      objectid.equals(i.id, id)
        ? {
            ...i,
            content: content ? content : i.content,
            isCompleted: isCompleted ? isCompleted : i.isCompleted,
          }
        : i,
    );
  }

  delete(id) {
    const obj = this.getTodoById(id);
    this.todos = this.todos.filter(i => !objectid.equals(i.id, id));
    return obj;
  }
}
