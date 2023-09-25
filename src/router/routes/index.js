import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoutes";


export const getRoutes = () => {

    return {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: privateRoutes
    }
}