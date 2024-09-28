import { FC } from 'react';

import { IEvent } from '../../interfaces';
import { NavBlock } from '../NavBlock';
import style from './Event.module.css';

interface IProps {
    event: Omit<IEvent, 'participants'>;
}

const Event:FC<IProps> = ({event:{title,  event_id, description,eventDate,organizer}}) => {
   
    return (
        <div className={style.Event}>
            <h4>Event: {title}</h4>
            <h4>Date: {eventDate }</h4>
            <h5>Organizer: {organizer}</h5>
            <span>Description: {description}</span>
            <NavBlock event_id={event_id } />
        </div>
    )
};

export { Event };