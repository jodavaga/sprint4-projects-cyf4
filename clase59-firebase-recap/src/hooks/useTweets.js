import { addDoc, getDocs } from "firebase/firestore";
import { getRefCollection } from "../firebase/config";

const useTweets = () => {
  const getTweets = async (setListaTweets) => {
    const querySnapshot = await getDocs(getRefCollection("tweets"));

    const tweets = querySnapshot.docs.map((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);

      const objTemp = {
        id: doc.id,
        ...doc.data(),
      };

      return objTemp;
    });

    setListaTweets([...tweets]);
  };

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

  return { newTweet, deleteTweet, getTweets };
};

export default useTweets;
