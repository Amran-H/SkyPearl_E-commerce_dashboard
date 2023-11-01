import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoutes";
import ProtectRoutes from "./ProtectRoutes";


export const getRoutes = () => {

    const allRoutes = [];

    privateRoutes.map(r => {
        r.element = <ProtectRoutes route={r}>{r.element}</ProtectRoutes>
    })

    return {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: privateRoutes
    }
}