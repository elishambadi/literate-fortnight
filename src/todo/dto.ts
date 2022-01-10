import { IsNotEmpty, IsString, IsBoolean, IsDate} from 'class-validator';

// DTOs - Data Transfer Objects
export class AddTodoDto {
    @IsString()
    @IsNotEmpty()
    public readonly title: string;

    // @IsDate()
    public readonly taskDate: Date;

    public constructor(opts?: Partial<AddTodoDto>){
        // Assign unknown parameters to object
        Object.assign(this, opts);
    }
}

export class EditTodoDto{
    @IsString()
    @IsNotEmpty()
    public readonly title: string;

    // @IsDate()
    public readonly taskDate: Date;

    // @IsBoolean()
    public readonly completed: boolean;

    public constructor(opts?: Partial<EditTodoDto>){
        Object.assign(this, opts);
    }
}

export class TodoDto{
    public readonly id: number;
    public readonly title: string;
    public readonly taskDate: Date;
    public readonly completed: boolean;

    public constructor(opts?: Partial<TodoDto>){
        Object.assign(this, opts);
    }
}