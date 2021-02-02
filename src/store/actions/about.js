import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const fetchAbout = () =>{
    return (dispatch)=>{
        firestore
        .collection("info")
        .doc("about")
        .get()
        .then((snapshot) => {
                const {aboutHeader1, aboutHeader2, aboutInfo, wisdomQuote}= snapshot.data();
                dispatch({type: actionTypes.FETCH_ABOUT, about: {aboutHeader1, aboutHeader2, aboutInfo, wisdomQuote}})
          })
          .then(() => {
            // dispatch({ type: actionTypes.LIST_CITIES, cities });
          });
    }
}

export const updateAbout = (data) =>{
    return ()=>{
        firestore
        .collection("info")
        .doc("about")
        .update({
            aboutHeader1: data.aboutHeader1,
            aboutHeader2: data.aboutHeader2,
            aboutInfo: data.aboutInfo,
            wisdomQuote: data.wisdomQuote,
        })
        .then(()=>{
            alert("Done")
        })
        .catch((err)=>{
            alert("Error", err.message)
        })
    }
}

