import { useParams } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { Participant } from "../Participant";
import style from './ParticipantsList.module.css';

const ParticipantsList = () => {
    
    const { event_id } = useParams();
    const { events } = useAppSelector(state => state.events);
    const participants = events.filter(val => val.event_id === + event_id)[0].participants;
    
    return (
        <div className={style.ParticipantsList}>
            {participants && participants.map((val,ind)=> <Participant key={ind} participant={val}/>)}
        </div>
    )
};

export { ParticipantsList };