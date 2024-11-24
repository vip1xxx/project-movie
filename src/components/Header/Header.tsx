import { Link } from "react-router-dom";
import './Header.css'
import {Search} from "./Search/Search";

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'image'}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQDYau3Hs4-xw1i8jVSUY4BlF4FLmg8lQqg&s" alt="movie-logo"/>
                </div>
            </Link>
            <div className={'search'}>
                <Search/>
            </div>
        </div>
    );
};

export {Header};