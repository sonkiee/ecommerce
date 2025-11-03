import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [user, setUser] = useState({
    username: "sonkey",
    name: "Kennedy Sunday",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (isLoggedIn) return <Redirect href="/(app)/(tabs)" />;

  return <Redirect href="/(auth)" />;
}
