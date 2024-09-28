import { FC } from "react";

import { IParticipant } from "../../interfaces";
import style from './Participant.module.css';

interface IState {
    participant: IParticipant
}

const Participant: FC<IState> = ({ participant: { fullName, birthDate, email, whoToldAboutAs } }) => {
    return (
        <div className={style.Participant}>
            <h4>Full name: {fullName}</h4>
            <h5>Date of Birth: {birthDate}</h5>
            <span>Where you found as: {whoToldAboutAs}</span>
        </div>
    )
};

export { Participant };