import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [user, setUser] = useState({
    username: "sonkey",
    name: "Kennedy Sunday",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) return <Redirect href="/(home)" />;

  return <Redirect href="/(auth)" />;
}
