import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage";


export const User: React.FC = () =>{

    const [routes, setRoutes] = useState<any>([
 
        { path: '/HomePage' , component: HomePage, bars : false},       
    ])

    return  <Routes>
        
            {routes.map(({ path, component: Component, bars } : 
            {path: string, component: React.ComponentType<any>, bars: boolean }) => (
                <Route
                    key={path}
                    path={path}
                    element={bars ?  <Component />  : <Component />}
                            />
                        ))}
            <Route path="*" element={<></>} />
        </Routes>
        }