import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts";
import { EventPage, ParticipantsPage, RegistrationPage } from "../pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'events?page=1'} /> },
            { path: 'events', element: <EventPage /> },
            { path: 'registration/:event_id', element: <RegistrationPage /> },
            {path: 'participants/:event_id', element: <ParticipantsPage/>}
        ]
    }
]);

export { router };