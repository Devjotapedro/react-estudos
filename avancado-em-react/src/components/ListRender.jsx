import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["JP", "Pedro", "João"]);

    const [users, setUsers] = useState([
        {id:1, name: "JP", age: 25},
        {id:2, name: "Pedro", age: 20},
        {id:3, name: "João", age: 15},
    ])
    return(
        <div>
            <ul>
                {/* 4- render sem key */}
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            {/* 5- render com key (abordagem recomendada)*/}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;