import React from "react";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { auth } = useAuth();
  return (
    <div>
      <p>Profile</p>
      <p>{JSON.stringify(auth)}</p>
    </div>
  );
}
