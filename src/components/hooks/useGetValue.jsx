import { useState } from "react";
export const useGetValues = (initialState) => {
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return { data, handleChange, setData };
};
