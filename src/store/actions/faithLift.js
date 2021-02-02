import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const fetchFaithLift = () =>{
    return (dispatch)=>{
        firestore
        .collection("info")
        .doc("about")
        .get()
        .then((snapshot) => {
                const {faithLiftHeader1, faithLiftHeader2, playListLink, channelLink}= snapshot.data();
                dispatch({type: actionTypes.FETCH_FAITHLIFT, faithLift: {faithLiftHeader1, faithLiftHeader2, playListLink, channelLink}})
          })
          .then(() => {
            // dispatch({ type: actionTypes.LIST_CITIES, cities });
          });
    }
}

export const updateFaithLift = (data) =>{
    return ()=>{
        firestore
        .collection("info")
        .doc("about")
        .update({
            faithLiftHeader1: data.faithLiftHeader1,
            faithLiftHeader2: data.faithLiftHeader2,
            playListLink: data.playListLink,
            channelLink: data.channelLink
        })
        .then(()=>{
            alert("Done")
        })
        .catch((err)=>{
            alert("Error", err.message)
        })
    }
}

