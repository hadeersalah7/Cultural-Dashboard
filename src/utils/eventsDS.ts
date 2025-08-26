import { openDB } from "idb";
import type { IEvent } from "../redux-features/user/types";

const DB_NAME = "event-db";
const STORE_NAME = "events";

// Function to create the db
export async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
}

// Function to save event: 
export const saveEvent = async(event: IEvent) => {
    const db = await getDB()
    await db.put(STORE_NAME, event)
}

// Function to update event:
export const updateEvent = async(event: IEvent) => {
    const db = await getDB()
    const existing = await db.get(STORE_NAME, event.id) 
    if (existing) {
        await db.put(STORE_NAME, event)
    } else {
        await db.add(STORE_NAME, event)
    }
}

// Function to get all events: 
export const getAllEvents = async ():Promise<IEvent[]> => {
    const db = await getDB()
    return db.getAll(STORE_NAME)
}
