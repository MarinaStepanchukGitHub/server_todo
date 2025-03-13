import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, TodoDto } from './dto';
import { STATUS } from './types';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Get()
  async get(@Query() query: {status?: STATUS}): Promise<TodoDto[]> {
    return query.status ? this.todoService.getTodoByStatus(query.status) : this.todoService.getAllTodos();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<TodoDto | null> {
    return this.todoService.getById(id);
  }

  @Post()
  async create(@Body() body: CreateTodoDto): Promise<TodoDto> {
    return this.todoService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: TodoDto): Promise<TodoDto> {
    return this.todoService.update(id, body)
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<null> {
    this.todoService.delete(id);

    return null;
  }
}
