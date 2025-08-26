import { http, HttpResponse } from "msw";
import type { IEvent, IPublicUser, LoginRequestBody, LoginResponseBody, User } from "../redux-features/user/types";
import { hits } from "../utils/hits";
import { deleteEvent, getAllEvents, saveEvent, updateEvent } from "../utils/eventsDS";

const users: User[] = [];

function addUser(email: string, password: string): User {
    const existing = users.find((u) => u.email === email);
    if (existing) return existing;
    const id = Date.now();
    const newUser: User = {
        id,
        email,
        password,
    };
    users.push(newUser);
    return newUser;
}

export const handlers = [
    // LOGIN API:
    http.post<{}, LoginRequestBody, LoginResponseBody>(
        "/login",
        async ({ request }) => {
            const { email, password } = await request.json();

            // const newUser = addUser(email, password)
            let user = users.find(
                (u) => u.email === email && u.password === password
            );
            if (!user) {
                user = addUser(email, password);
            } else {
                if (user.password !== password) {
                    return HttpResponse.json(
                        { token: "", user: { id: 0, email: "", password: "" } },
                        { status: 401 }
                    );
                }
            }

            return HttpResponse.json({
                token: "mock-token-" + user.id,
                user,
            });
        }
    ),

    // GET EMAIL & PASSWORD API:
    http.get<{}, {}, IPublicUser | null>("/me", () => {
        // const authHeader = request.headers.get("Authorization");
        // const token = authHeader?.split(" ")[1];
        // const userId = Number(token?.split("-")[2]);
        // const user = users.find((u) => u.id === userId);
        const userString = localStorage.getItem("user");
        const user = userString ? (JSON.parse(userString) as User) : null;
        if (user) {
            const publicUser: IPublicUser = {
                email: user.email,
                id: user.id,
            };
            return HttpResponse.json(publicUser);
        }
        return HttpResponse.json(null, { status: 401 });
    }),

    // THE DASHBOARD CULTURAL INSIGHTS API:
    http.get<{}, {}>("https://pixabay.com/api/videos", ({ request }) => {
        const url = new URL(request.url);
        const query = url.searchParams.get("q");
        // const perPage = url.searchParams.get("per_page");
        return HttpResponse.json({
            hits,
        });
    }),

    // THE ADD EVENT API:
    http.post<IEvent, IEvent>("/api/createEvent", async ({ request }) => {
        const body: IEvent = await request.json();
        await saveEvent(body)
        return HttpResponse.json({ success: true, event: body });
    }),

    //GET ALL THE EVENTS:
    http.get<{}, { events: IEvent[] }>("/api/events", async() => {
        const events = await getAllEvents()
        return HttpResponse.json({ events });
    }),

    // UPDATE EVENT API:
    http.put<IEvent, IEvent>("/api/updateEvent", async ({ request }) => {
        const body: IEvent = await request.json();
        // const index = events.findIndex((e) => e.id === body.id);
        // if (index !== -1) {
        //     events[index] = body;
        // } else {
        //     events.push(body);
        // }
        await updateEvent(body)
        return HttpResponse.json({ success: true, event: body });
    }),

    // DELETE EVENT API:
    http.delete<{ id: string }, {}, { success: boolean }>("/api/deleteEvent/:id", async ({ params }) => {
        const id = params.id;
        await deleteEvent(id)
        return HttpResponse.json({ success: true });
    })
];
