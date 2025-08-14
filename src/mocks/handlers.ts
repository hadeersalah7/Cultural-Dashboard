import { http, HttpResponse } from "msw";
import type { IPublicUser, User } from "../redux-features/user/types";


const users: User[] = [];

type LoginRequestBody = {
    email: string;
    password: string;
};

type LoginResponseBody = {
    token: string;
    user: {
        id: number;
        password: string;
        email: string;
    };
};

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
    http.get<{}, {}, IPublicUser | null>("/me", () => {
        // const authHeader = request.headers.get("Authorization"); 
        // const token = authHeader?.split(" ")[1];
        // const userId = Number(token?.split("-")[2]);
        // const user = users.find((u) => u.id === userId);
        const userString = localStorage.getItem("user")
        const user = userString ? JSON.parse(userString) as User : null
        if (user) {
            const publicUser: IPublicUser = {
                email: user.email,
                id: user.id
            }
            return HttpResponse.json(publicUser);
        }

        return HttpResponse.json(null, { status: 401 });
    }),
];
