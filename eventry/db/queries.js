import { eventModel } from "@/models/event-models";
import {
  replaceMongoIdinArray,
  replaceMongoIdinObject,
} from "@/utils/data-util";

async function getAllEvents() {
  try {
    const allEvents = await eventModel.find().lean(); // Fetch all documents
    return replaceMongoIdinArray(allEvents);
  } catch (err) {
    console.error("Error fetching events:", err);
  }
}

async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdinObject(event);
}

export { getAllEvents, getEventById };
