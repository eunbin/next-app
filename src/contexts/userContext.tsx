import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface UserState {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<UserState | null>(null);

function UserProvider({
  userId,
  children,
}: {
  userId: string;
  children: ReactNode;
}) {
  const [user, setUser] = useState<string>(userId);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
