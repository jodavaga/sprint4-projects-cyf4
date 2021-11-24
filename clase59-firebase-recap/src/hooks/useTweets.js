import { addDoc } from "firebase/firestore";
import { getRefCollection } from "../firebase/config";

const useTweets = () => {
  const newTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(getRefCollection("tweets"), tweetObject);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteTweet = () => {
    // borrar tweets
    console.warn("Borrando tweet...");
  };

  return { newTweet, deleteTweet };
};

export default useTweets;
