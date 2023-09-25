import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const {name} = useContext(AuthContext);
    return (
        <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500 ...">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Log Panel</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li>
                        <p>{name}</p>
                        <img className="w-10 rounded-full" src="" />
                    </li>
                <li>
                    <details>
                    <summary>
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;