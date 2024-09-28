import { IParticipant } from "./participartInterface";

export interface IEvent {
    event_id: number;
    title: string;
    description: string;
    eventDate: string;
    organizer: string;
    participants: IParticipant[];
}