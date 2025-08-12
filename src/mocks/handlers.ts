import { http, HttpResponse } from "msw";
type User = {
    password: string;
    id: number;
    email: string;
};

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
];
