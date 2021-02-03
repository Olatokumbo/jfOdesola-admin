import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const fetchSlideShow = () =>{
    return (dispatch)=>{
        firestore
        .collection("info")
        .doc("about")
        .get()
        .then((snapshot) => {
                const {slideshow}= snapshot.data();
                dispatch({type: actionTypes.FETCH_SLIDESHOW, slideshow: {slideshow}})
          })
          .then(() => {
            // dispatch({ type: actionTypes.LIST_CITIES, cities });
          });
    }
}

// export const updateSlideShow = (data) =>{
//     console.log(data);
//     return ()=>{
//         firestore
//         .collection("info")
//         .doc("about")
//         .update({
//             faithLiftHeader1: data.faithLiftHeader1,
//             faithLiftHeader2: data.faithLiftHeader2,
//             playListLink: data.playListLink,
//             channelLink: data.channelLink
//         })
//         .then(()=>{
//             alert("Done")
//         })
//         .catch((err)=>{
//             alert("Error", err.message)
//         })
//     }
// }

