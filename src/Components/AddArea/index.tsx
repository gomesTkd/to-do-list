import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
    onAdd: (taskName: string) => void;
}

export const AddArea = ({ onAdd }: Props) => {
    const [inputText, setInputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inputText !== "") {
            onAdd(inputText);
            setInputText("");
        }
    }

    return (
        <C.Container>
            <div className={"add"}>+</div>
            <input
                type={"text"}
                placeholder={"Add new task - click enter to add"}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}
