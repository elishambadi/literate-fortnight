// DTOs - Data Transfer Objects
export class AddTodoDto {
    public readonly title: string;

    public constructor(opts?: Partial<AddTodoDto>){
        // Assign unknown parameters to object
        Object.assign(this, opts);
    }
}

export class EditTodoDto{
    public readonly title: string;
    public readonly completed: boolean;

    public constructor(opts?: Partial<EditTodoDto>){
        Object.assign(this, opts);
    }
}

export class TodoDto{
    public readonly id: number;
    public readonly title: string;
    public readonly completed: boolean;

    public constructor(opts?: Partial<TodoDto>){
        Object.assign(this, opts);
    }
}