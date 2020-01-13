import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AuthGuard } from '../auth.guard';

@Controller('todo')
@UseGuards(AuthGuard)
export class TodoController {
  constructor(private todosService: TodoService) {}
  
  @Post()
  async create(@Body() body: any) {
    return this.todosService.create(body.content);
  }

  @Get()
  async getAllTodos() {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: any) {
    return this.todosService.getTodoById(id);
  }

  @Put(':id')
  async update(@Param('id') id: any, @Body() body: any) {
    this.todosService.update(id, body.content, body.isCompleted);
  }

  @Delete(':id')
  async delete(@Param('id') id: any) {
    return this.todosService.delete(id);
  }
}
