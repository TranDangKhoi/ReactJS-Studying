import React from "react";
import { useAuth } from "../../contexts/authContext";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">
            Welcome, <strong>{user.fullName}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Please login</span>
      )}
      {user ? (
        <button className="ml-auto" onClick={() => setUser(null)}>
          Sign out
        </button>
      ) : (
        <button
          className="ml-auto"
          onClick={() =>
            setUser({
              ...user,
            })
          }
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default HeaderMain;
