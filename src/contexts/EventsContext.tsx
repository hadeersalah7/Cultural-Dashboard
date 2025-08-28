import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IEvent } from "../redux-features/user/types";
import { getAllEvents } from "../utils/eventsDS";

interface IEventContext {
    events: IEvent[];
    setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
    fetchEvents: () => Promise<void>;
}

export const EventContext = createContext<IEventContext>({
    events: [],
    setEvents: () => { },
    fetchEvents: async () => { },
})

export const EventProvider = ({ children }: { children: ReactNode }) => {
    const [events, setEvents] = useState<IEvent[]>([])

    const fetchEvents = async (): Promise<void> => {
        const allEvents = await getAllEvents();
        setEvents(allEvents);
    };

    useEffect(() => {
        fetchEvents()
    }, [])

    const eventsValues = {
        events,
        setEvents,
        fetchEvents
    }
    return (
        <EventContext.Provider value={eventsValues}>
            {children}
        </EventContext.Provider>
    )
}