export type TodoProps = {
    id: number;
    text:string;
    completed: boolean;
}

export type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: number}
    | {type: "EDIT"; payload: {id: number; newText: string}}
    | {type: "COMPLETE"; payload: number}
    | {type: "CLEAR_ALL"};


export type TodoFormProps = {
    dispatch: React.Dispatch<Action>;
};

export type TodoListProps = {
    todos: TodoProps[];
    dispatch: React.Dispatch<Action>
}