import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const favoritesCollection = collection(db, "favorites");

class FavoritesService {
  getAll = async () => {
    const favoritesSnapshot = await getDocs(favoritesCollection);
    const favoritesList = favoritesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return favoritesList;
  };

  create = async (favoriteItem) => {
    await addDoc(favoritesCollection, favoriteItem);
  };
  //   update(id, value) {
  //     return favoritesCollection.doc(id).update(value);
  //   }

  delete = async (id) => {
    const favoritsDoc = doc(db, "favorites", id);
    await deleteDoc(favoritsDoc);
  };
}
export default new FavoritesService();
