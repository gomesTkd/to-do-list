import { Fragment, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./Types/Item";

const App = () => {
    const [list, setList] = useState<Item[] >([
        {id: 90, name: "Purchase bread", done: false},
        {id: 91, name: "Purchase cake", done: false},
    ]);

    return (
        <Fragment>
            <C.Container>
                <C.Area>
                    <C.Header>To do list</C.Header>
                    {list.map((Item, index) => (
                        <div key={index}>
                            {Item.name}
                            {Item.done}
                        </div>
                    ))}
                </C.Area>
            </C.Container>
        </Fragment>
    );
}

export default App;
