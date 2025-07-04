import {useEffect, useState} from "react";
import type { TodoFormProps} from "../types.ts";


const TodoForm = ({ dispatch, inputRef }: TodoFormProps) => {

    const [text, setText] = useState("");

    // const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if (text.trim() !== "") {
            dispatch({type: "ADD", payload: text});
            setText("");
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <>
            <form
                className="flex gap-4 mb-4"
                onSubmit={handleSubmit}
            >
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={handleChange}
                    className="flex-1 border p-2 rounded"
                    placeholder="New task.."
                />
                <button
                    type="submit"
                    className="bg-cf-dark-gray text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </form>
        </>
    )
};

export default TodoForm;