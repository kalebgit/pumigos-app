import { Link } from "react-router-dom"



export default function NavigationBar({links}){
    return (
        <header className=" w-full">
            <nav>
                <ul className=" flex flex-row flex-nowrap justify-center items-start gap-3">
                    {links.map((link)=>{
                    return (
                        <li className=" hover:underline hover:text-blue-400">
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