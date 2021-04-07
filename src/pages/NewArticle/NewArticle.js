import { Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import PararaphCard from "../../components/ParagraphCard/ParagraphCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as actionCreator from "../../store/actions";
import { connect } from "react-redux";
import style from "./NewArticle.module.css";

const NewArticle = ({addArticle, isLoading}) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState([]);
  const [poster, setPoster] = useState(null);
  const [displayPhoto, setDisplayPhoto] = useState("");
  const previewPhoto = (files) => {
    if (files) {
      setDisplayPhoto(URL.createObjectURL(files));
      setPoster(files);
    }
  };
  const add = () => {
    addArticle({ title, message, poster });
  };
  const addMessage = (e) => {
    e.preventDefault();
    setMessage((prevMessage) =>
      prevMessage.concat(e.target.elements.message.value)
    );
    e.target.elements.message.value = "";
  };

  const removeMessage = (removeText) => {
    setMessage(message.filter((keyword) => keyword !== removeText));
  };
  return (
    <div className={style.new_article}>
      <div className={style.content}>
        <Typography className={style.header}>New Article</Typography>
        <div className={style.inputContainer}>
          <TextField
            type="text"
            label="Title"
            variant="outlined"
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={style.input}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="file"
            label="Poster"
            variant="outlined"
            accept="image/x-png,image/gif,image/jpeg"
            size="small"
            onChange={(e) => {
              previewPhoto(e.target.files[0]);
            }}
            className={style.input}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <img
            src={displayPhoto}
            className={style.previewPhoto}
            alt="preview"
          />
          <div className={style.messageContainer}>
            {message?.map((text, index) => {
              return (
                <PararaphCard
                  key={index}
                  text={text}
                  index={index}
                  remove={removeMessage}
                />
              );
            })}
          </div>
          <form onSubmit={addMessage} className={style.paragraphForm}>
            <TextField
              name="message"
              type="text"
              label="Message"
              variant="outlined"
              size="small"
              multiline={true}
              rows={5}
              required
              className={style.input}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={style.addBtn}
            >
              Add New Paragraph
            </Button>
          </form>
        </div>
        <Button
        variant="contained"
        className={style.saveBtn}
        color="secondary"
        disabled={!(!!title && !!message && !!poster && message.length>0)  || (isLoading)}
        onClick={add}
      >
        Save
      </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.article.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (data) => dispatch(actionCreator.addArticle(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);
