import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public taskDate: Date;

    @Column()
    public completed: boolean;

    public constructor(title: string, taskDate: Date){
        this.title = title;
        this.taskDate = new Date(taskDate);
        this.completed = false;
    }
}
