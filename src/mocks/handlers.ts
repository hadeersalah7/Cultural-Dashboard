import { http, HttpResponse } from "msw";

type User = {
    name: string;
    password: string;
    id: number;
    email: string;
};

const users: User[] = [
    {
        id: 1,
        name: "Hadeer Salah",
        password: "password123",
        email: "hadeer@example.com",
    },
    { id: 2, name: "Amunet", password: "mypassword", email: "amunet@amunet.com" },
];

type LoginRequestBody = {
    email: string;
    password: string;
};

type LoginResponseBody = {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
};

export const handlers = [
    http.post<{}, LoginRequestBody, LoginResponseBody>(
        "/login",
        async ({ request }) => {
            const { email, password } = await request.json();

            const user = users.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                return HttpResponse.json({
                    token: "mock-token-" + user.id,
                    user,
                });
            }

            return HttpResponse.json(
                { token: "", user: { id: 0, name: "", email: "" } },
                { status: 401 }
            );
        }
    ),
];
