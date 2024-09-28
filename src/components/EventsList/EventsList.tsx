import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

import { Event } from '../Event';
import style from './EventsList.module.css';

const EventsList = () => {

    const { events } = useAppSelector(state => state.events);
    const { search } = useLocation();
    const page = +search.split('=').reverse()[0];
    const showEvents = events.map(({ participants, ...rest }) => rest).slice(page*8 - 8, page*8)
    
    return (
        <div className={style.EventList}>
    
            {showEvents && showEvents.map((val, ind)=> <Event key={ind} event={val} />)}
        </div>
    )
};

export { EventsList };