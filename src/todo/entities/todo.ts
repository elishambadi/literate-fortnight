export class Todo {
    public id: number;
    public title: string;
    public completed: boolean;

    public constructor(title: string){
        this.title = title;
        this.completed = false;
    }
}
