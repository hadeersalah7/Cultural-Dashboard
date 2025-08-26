import { useEffect, useState } from "react";
import type { IEvent } from "../redux-features/user/types";
import { getAllEvents, saveEvent, updateEvent } from "../utils/eventsDS";
export default function useEventDB() {
    const [events, setEvents] = useState<IEvent[]>([]);
    const fetchEvents = async () => {
        const allEvents = await getAllEvents();
        setEvents(allEvents);
    };

    useEffect(() => {
        fetchEvents();
    }, []);
    return {
        events,
        setEvents,
        saveEvent,
        updateEvent,
        fetchEvents
    };
}
