// Todo interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
  }
export interface createTodoInterface{
    type: String,
    text: String,
}
  // Todo form interface
  export interface AddTodoInterface {
    todoHandler: (todo: createTodoInterface) => void;
  }
  // Todo list interface
  export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[]
  }
  // Todo item interface
  export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;
  }