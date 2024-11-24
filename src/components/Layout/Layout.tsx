import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <div className={'layoutWrap'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};