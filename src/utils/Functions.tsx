
export const preventFormSubmimtion = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }   
};

