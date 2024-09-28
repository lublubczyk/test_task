import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent, IParticipant } from "../../interfaces";


interface IState {
    events: IEvent[] | []
};

const initialState: IState = {
    events: []
};

const eventsSlice = createSlice({
    name: 'eventsSlice',
    initialState,
    reducers: {
        setEvents: (state, action) => { state.events = action.payload },
        addParticipant: (state, action: PayloadAction<{ event_id: number; participant: IParticipant }>) => {
            const { event_id, participant } = action.payload;
            const event = state.events.find(event => event.event_id === event_id);
            if (event) {
                participant.user_id = event.participants.length;
                event.participants.push(participant)
            };
        }
    }
});

const { reducer: eventsReducer, actions: eventsActions } = eventsSlice;

export { eventsActions, eventsReducer };