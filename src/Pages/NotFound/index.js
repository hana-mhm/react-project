import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
    <Fragment>
    <h1>404 pape</h1>
    <Link to="/">go to home</Link>
    </Fragment>
    );
}