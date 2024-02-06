import { Link } from "react-router-dom"



export default function NavigationBar({links}){
    return (
        <header className=" w-full">
            <nav>
                <ul>
                    {links.map((link)=>{
                    return (
                        <li >
                            <Link to={`${link.path}`}>
                                {link.name}
                            </Link>
                        </li>)
                    })}
                </ul>
            </nav>
        </header>
    )
}