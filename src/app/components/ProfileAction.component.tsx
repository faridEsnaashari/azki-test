"use client";

import { text1 } from "../texts";

function ProfileAction() {
  const user = localStorage.getItem("user");
  const username = user ? JSON.parse(user).name : text1;
  return <p>{username}</p>;
}

export default ProfileAction;
