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

  export interface AddTodoInterface {
    todoHandler: (todo: createTodoInterface) => void;
  }
  