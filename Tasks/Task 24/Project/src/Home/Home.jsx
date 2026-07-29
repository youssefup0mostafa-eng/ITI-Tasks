import { useState } from "react";
import Child from "./Child/Child";

export default function Home () {
    let [ userName , setUserName ] = useState(`Youssef`);
    console.log(userName);
    return (
        <>
        <h1>Youssef Mostafa</h1>

        <Child userName={userName}></Child>
        </>
    );
};