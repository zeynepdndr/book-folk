import { db } from "../firebase-config";
import { getDoc, addDoc, deleteDoc, doc } from "firebase/firestore";

class UserFavoritesService {
  getUserFavorites = async (userId) => {
    const docRef = doc(db, "users", "8QAS9NengKoPkbwSqP1a");
    const docSnap = await getDoc(docRef);
    console.log("favoritesSnapshot", docSnap.data());
    return docSnap;
  };

  add = async (userId, favoriteItem) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    docSnap.data().favorites.push(favoriteItem);
    console.log("favoriteItem", docSnap.data().favorites.push(favoriteItem));
    return docSnap.data().favorites;
  };

  delete = async (id) => {
    const favoritsDoc = doc(db, "favorites", id);
    await deleteDoc(favoritsDoc);
  };
}
export default new UserFavoritesService();
