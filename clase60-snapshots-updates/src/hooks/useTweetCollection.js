import { useContext } from "react";
import { addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { tweetsCollectionRef } from "../firebase/config";
import { TweetsContext } from "../contexts/TweetsContext";

function useTweetCollection() {
  // Consumimos el contexto
  const { setListaTweets } = useContext(TweetsContext);

  // Get all docs
  const getAllDocs = async () => {
    try {
      const querySnapshot = await getDocs(tweetsCollectionRef);

      const tweetsArray = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(
        "🚀 ~ file: useTweetCollection.js ~ line 16 ~ tweetsArray ~ tweetsArray",
        tweetsArray
      );

      // actualizar mi Arreglo Global de tweets
      setListaTweets(tweetsArray);
    } catch (e) {
      console.log(e);
    }
  };

  // add Doc (add tweet)
  const addNewTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(tweetsCollectionRef, tweetObject);
      console.log("Document written with ID: ", docRef.id);
      // get updated docs
      await getAllDocs();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // delete docuemnt
  const deleteTweet = async (idDocument) => {
    console.warn("Eliminand doc: ", idDocument);
    // get doc reference
    const refDocument = doc(tweetsCollectionRef, idDocument);

    // borramos
    await deleteDoc(refDocument);

    // get updated docs
    await getAllDocs();
  };

  return { addNewTweet, getAllDocs, deleteTweet };
}

export default useTweetCollection;
