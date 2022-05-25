import { db } from "../firebase-config";
import {
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

class UserFavoritesService {
  getUserFavorites = async (userId) => {
    const docRef = doc(db, "users", "8QAS9NengKoPkbwSqP1a");
    const docSnap = await getDoc(docRef);
    console.log("favoritesSnapshot", docSnap.data());
    return docSnap;
  };

  add = async (userId, favoriteItem) => {
    const docRef = doc(db, "users", userId);
    updateDoc(docRef, { favorites: arrayUnion(favoriteItem) });
  };

  delete = async (id) => {
    const favoritsDoc = doc(db, "favorites", id);
    await deleteDoc(favoritsDoc);
  };
}
export default new UserFavoritesService();
