import { useContext, useState, createContext } from "react";

const userContextDefaultValues = {
    setUser: () => {},
    user: null,
};

export const UserContext = createContext(userContextDefaultValues);

export function useUserContext() {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;