import { useContext } from "react";
import {
  addDoc,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getRefCollection } from "../firebase/config";
import { TweetListContext } from "../contexts/TweetListContext";

const useTweets = () => {
  const { setListaTweets } = useContext(TweetListContext);

  // get all tweets collection
  const getTweets = async () => {
    const querySnapshot = await getDocs(getRefCollection("tweets"));

    const tweetsArray = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    console.log("🚀 ~  ~ tweetsArray", tweetsArray);
    setListaTweets(tweetsArray);
  };

  // Add new tweet
  const addTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(getRefCollection("tweets"), tweetObject);
      console.log("Document written with ID: ", docRef.id);
      // get updated collection
      await getTweets();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Delete tweets
  const deleteTweet = async (idDocument) => {
    try {
      console.warn("Borrando tweet...", idDocument);
      const docRef = doc(getRefCollection("tweets"), idDocument);
      await deleteDoc(docRef);
      // get updated collection
      await getTweets();
    } catch (e) {
      console.log(e);
    }
  };

  // update likes
  const addLikes = async (idDocument) => {
    const docRef = doc(getRefCollection("tweets"), idDocument);

    const documentData = (await getDoc(docRef)).data();

    await updateDoc(docRef, {
      likes: documentData.likes ? documentData.likes + 1 : 1,
    });
    // get updated collection
    await getTweets();
  };

  return { addTweet, deleteTweet, getTweets, addLikes };
};

export default useTweets;
