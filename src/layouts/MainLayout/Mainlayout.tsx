import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import { useEffect } from "react";

import { useAppDispatch } from "../../hooks";
import { eventsList } from "../../constants";
import { eventsActions } from "../../redux";

const MainLayout = () => {
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(eventsActions.setEvents(eventsList));
    }, [dispatch])
    
    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
};

export { MainLayout };