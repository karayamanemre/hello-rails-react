import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/greeting";

export default function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h2>{greeting.message}</h2>
    </div>
  );
}
