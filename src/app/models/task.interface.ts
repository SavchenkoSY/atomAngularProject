import { TaskPriority } from "./task-priority.enum";

export interface Task{
    title: string;
    priority: TaskPriority;
    assignee: string;
    done: boolean;
    estimathion: number;
    description: string;
    tags: string[];
}