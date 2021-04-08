import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Typography,
  IconButton,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import moment from "moment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import * as actionCreator from "../../store/actions";
import style from "./Articles.module.css";
const Articles = ({ getArticles, articles }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);
  return (
    <div className={style.articles}>
      <div className={style.content}>
        <Typography className={style.header}>Articles Section</Typography>
        <Link to="/new/article">
          <Button variant="contained" size="small" color="primary">
            Add New Article
          </Button>
        </Link>
        <TableContainer className={style.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Published Date</TableCell>
                <TableCell align="center">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles?.map((article) => (
                <TableRow key={article.id}>
                  <TableCell component="th" scope="row">
                    {article.title}
                  </TableCell>
                  <TableCell align="center">
                    {moment(article?.publishDate?.toDate()).format(
                      "MM/DD/YYYY"
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/article/${article.id}`}>
                      <IconButton>
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getArticles: () => dispatch(actionCreator.fetchArticles()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
