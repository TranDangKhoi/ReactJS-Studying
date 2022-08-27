import { useContext, useState, createContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullName: "Khoi Tran",
    email: "khoi@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1661602570478-3423b3e39db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
