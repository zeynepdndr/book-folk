import { useEffect, useState } from "react";

const localCache = {};

const useFavoriteList = (user) => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [status, setStatus] = useState("pending");

  const requestFavoriteList = async () => {
    setStatus("pending");
    setFavoriteList([]);
    const response = await fetch(`/api/users/${user}/favorites`);
    const data = await response.json();
    localCache[user] = data || [];
    setFavoriteList(data);
    setStatus("resolved");
  };

  useEffect(() => {
    if (!user) {
      setFavoriteList([]);
    } else if (localCache[user.uid]) {
      setFavoriteList(localCache[user.uid]);
    } else requestFavoriteList();
  }, []);
  return { favoriteList, status };
};

export default useFavoriteList;
