import * as actionTypes from "./actionTypes";
import { firestore } from "../../firebase/firebase";
export const fetchArticles = () => {
  return (dispatch) => {
    let articles = [];
    firestore
      .collection("articles")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          articles.push({ ...doc.data(), id: doc.id });
        });
      })
      .then(() => {
        dispatch({ type: actionTypes.FETCH_ARTICLES, articles});
      });
  };
};
