import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      // Fetch the profile of the current user from the server
      const response = await client.profile();
      dispatch(setCurrentUser(response)); // Set the profile in the Redux store
    } catch (err: any) {
      console.error("Error fetching profile:", err);
    }
    setPending(false); // Mark that loading has finished, whether successful or not
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // If we are still waiting for the profile data, don't render children yet
  if (pending) {
    return <div>Loading...</div>; // Optionally add a loading indicator
  }

  // Once loading is complete, render the children (i.e., the rest of the app)
  return children;
}
