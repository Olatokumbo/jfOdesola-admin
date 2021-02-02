import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const fetchSocials = () =>{
    return (dispatch)=>{
        firestore
        .collection("info")
        .doc("about")
        .get()
        .then((snapshot) => {
                const {facebookUrl, instagramUrl}= snapshot.data();
                dispatch({type: actionTypes.FETCH_SOCIALS, socials: {facebookUrl, instagramUrl}})
          })
          .then(() => {
            // dispatch({ type: actionTypes.LIST_CITIES, cities });
          });
    }
}

export const updateSocials = (data) =>{
    return ()=>{
        firestore
        .collection("info")
        .doc("about")
        .update({
            facebookUrl: data.facebookUrl,
            instagramUrl: data.instagramUrl
        })
        .then(()=>{
            alert("Done")
        })
        .catch((err)=>{
            alert("Error", err.message)
        })
    }
}

