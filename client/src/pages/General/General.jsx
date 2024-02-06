import { Outlet } from "react-router-dom"
import NavigationBar from "./NavigationBar"

export default function General(){
    const routes = [
        {
            path: '/posts',
            title: "Publicaciones"
        },{
            path: '/chat',
            title: "Chat"
        }
    ]

    return (
        <>
            <NavigationBar links={routes}/>
            <Outlet/>
            
        </>
    )
}