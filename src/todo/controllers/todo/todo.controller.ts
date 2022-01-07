import { AddTodoDto, EditTodoDto, TodoDto } from 'src/todo/dto';
import { TodoService } from 'src/todo/services/todo/todo.service';

import{
    Controller, Get, Param, Post, Put,
    Body, Delete
} from '@nestjs/common'
import { Todo } from 'src/todo/entities/todo';

@Controller('todo')
export class TodoController {
    public constructor(
        private readonly todoService: TodoService
    ){}

    @Get()
    public findAll(): Promise<TodoDto[]>{
        return this.todoService.findAll();
    }

    @Get(':id')
    // @Param helps get parameters from urls
    public findOne(@Param('id') id: number): Promise<TodoDto>{
        return this.todoService.findOne(id);
    }

    @Post()
    public add(@Body() todo: AddTodoDto): Promise<TodoDto>{
        return this.todoService.add(todo);
    }

    @Post(':id')
    public edit(@Param('id') id:number, @Body() todo:EditTodoDto): Promise<TodoDto>{
        return this.todoService.edit(id, todo)
    }

    @Post(':id')
    public remove(@Param('id') id:number): Promise<TodoDto>{
        return this.todoService.remove(id)
    }
}
