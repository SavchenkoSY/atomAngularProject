import { TaskPriority } from "./task-priority.enum";

export interface Task{
    title: string;
    priority: TaskPriority;
    assignee: string;
    status: boolean;
    estimathion: number;
    description: string;
    tags: string[];
}