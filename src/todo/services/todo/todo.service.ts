import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from '../../entities/todo';
import { isNullOrUndefined  } from 'util';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoDto, AddTodoDto, EditTodoDto } from 'src/todo/dto';
import { TodoMapperService } from '../todo-mapper/todo-mapper.service';

@Injectable()
export class TodoService {
    public constructor(
        @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
        private readonly todoMapper: TodoMapperService,
    ){}

    // test data for the todos
    // todos = [
    //     {
    //         id:1,
    //         title:"Book reading",
    //         completed:false
    //     },
    //     {
    //         id:2,
    //         title:'Read Bible',
    //         completed:true
    //     }
    // ]

    // Note usages of Await and async
    public async findAll(): Promise<TodoDto []>{
        const todos = await this.todoRepository.find();

        return todos.map(this.todoMapper.modeltoDto)
    }

    public async findOne(id: number): Promise<TodoDto>{
        const todo = await this.todoRepository.findOne(id);

    if (isNullOrUndefined(todo)) throw new NotFoundException;
        return this.todoMapper.modeltoDto(todo);
    }

    // {title} is a parameter to AddtoDto object
    public async add({title, taskDate}: AddTodoDto): Promise<TodoDto>{
        let todo = new Todo(title, taskDate);
        todo = await this.todoRepository.save(todo);
        return this.todoMapper.modeltoDto(todo);
    }

    public async edit(id: number, {title, taskDate, completed}: EditTodoDto): Promise<TodoDto>{
        let todo = await this.todoRepository.findOne(id);

        if (isNullOrUndefined(todo)) throw new NotFoundException;

        todo.title = title;
        todo.taskDate = taskDate;
        todo.completed = completed;

        todo = await this.todoRepository.save(todo);

        return this.todoMapper.modeltoDto(todo);
    }

    public async remove(id: number): Promise<any>{
        let todo = await this.todoRepository.findOne(id);
        if (isNullOrUndefined(todo)) throw new NotFoundException;

        todo = await this.todoRepository.remove(todo);

        return todo;
    }

}
