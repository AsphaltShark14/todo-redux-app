export type Task = {
    id: number;
    text: string;
    status: "todo" | "done";
}

export type Todo = {
    tasks: Task[];
}