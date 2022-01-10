import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/todo/dto';
import { Todo } from '../../entities/todo'

@Injectable()
export class TodoMapperService {
    public modeltoDto({id, title, taskDate, completed}: Todo): TodoDto{
        return new TodoDto({id, title, taskDate, completed});
    }
}
