import { Fragment, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./Types/Item";
import { ListItem } from "./Components/ListItem/index";
import { AddArea } from "./Components/AddArea";

const App = () => {
    const [list, setList] = useState<Item[] >([
        {id: 90, name: "Purchase bread", done: false},
        {id: 91, name: "Purchase cake", done: false},
    ]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        newList.push({
            id: (list.length + 1),
            name: taskName,
            done: false,
        })
        setList(newList);
    }

    return (
        <Fragment>
            <C.Container>
                <C.Area>
                    <C.Header>To do list</C.Header>
                    <AddArea onAdd={handleAddTask} />
                    {list.map((item, index) => (
                        <ListItem key={index} item={item}/>
                    ))}
                </C.Area>
            </C.Container>
        </Fragment>
    );
}

export default App;
