import { Outlet } from "react-router-dom"

export default function Cat() {
    return (
        <>
            <h1>Hello From Cats Component</h1>
            <Outlet></Outlet>
        </>
    )
    }
