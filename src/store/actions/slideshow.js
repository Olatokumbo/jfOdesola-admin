import firebase, { firestore, storage } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const fetchSlideShow = () => {
  return (dispatch) => {
    firestore
      .collection("info")
      .doc("about")
      .onSnapshot((snapshot) => {
        const { slideshow } = snapshot.data();
        dispatch({ type: actionTypes.FETCH_SLIDESHOW, slideshow: slideshow });
      });
  };
};

export const addSlideShow = (image) => {
  return (dispatch) => {
    dispatch({type: actionTypes.UPLOAD_SLIDESHOW});
    const name = Date.now().toString();
    let uploadTask = storage.ref(`slideshow/${name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // dispatch({type:actionTypes.PROGRESS, progress});
        // console.log(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("slideshow")
          .child(name) //image.name
          .getDownloadURL()
          .then((url) => {
            //  Add your firestore query here
            firestore
              .collection("info")
              .doc("about")
              .update({
                slideshow: firebase.firestore.FieldValue.arrayUnion(url),
              })
              .then(() => {
                dispatch({
                  type: actionTypes.ADD_SLIDESHOW_SUCCESS,
                  message: "Slideshow list has been updated",
                });
                alert("Slideshow list has been updated");
              })
              .catch((err) => {
                dispatch({
                  type: actionTypes.ADD_SLIDESHOW_FAILED,
                  message: err.message,
                });
                alert(err.message);
              });

            // console.log(url)
          });
      }
    );
  };
};

export const deleteSlideShow = (name) => {
  return () => {
    // storage
    // .ref("slideshow")
    // .child(name)
    // .delete()
    // .then(()=>{
      firestore
      .collection("info")
      .doc("about")
      .update({
        slideshow: firebase.firestore.FieldValue.arrayRemove(name),
      }).then(()=>{
        console.log("Slideshow has been deleted")
      });
    // });
  }
};
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
