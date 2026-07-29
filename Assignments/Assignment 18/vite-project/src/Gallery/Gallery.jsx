import { Outlet , Link} from "react-router-dom"

export default function Gallery() {


    return (
        <>
            <Outlet />
            <nav>
                <ul>
                    <li>
                        <Link className="nav-link" to={'cats'}>Cats</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h2>Gallery</h2>
            </div>
        </>
    )
}
