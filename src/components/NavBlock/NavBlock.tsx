import { NavLink } from "react-router-dom"
import { FC } from 'react';

import style from './NavBlock.module.css'

interface IState {
    event_id: number
}

const NavBlock:FC<IState> = ({event_id}) => {
    return (
        <div className={style.NavBlock}>
            <NavLink to={`/registration/${event_id}`}>Register</NavLink>
            <NavLink to={`/participants/${event_id}`}>View</NavLink>
        </div>
    )
};

export { NavBlock };