import { Outlet } from "react-router-dom"
import NavigationBar from "./NavigationBar"

export default function General(){
    const routes = [
        {
            path: '/posts',
            name: "Publicaciones"
        },{
            path: '/chat',
            name: "Chat"
        },{
            path: '/market',
            name: "Market"
        }
    ]

    return (
        <>
            <NavigationBar links={routes}/>
            <Outlet/>
        </>
    )
}