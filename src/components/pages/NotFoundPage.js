import '../../dist/css/NotFoundPage.css';
import React from "react";
import {FaRegFrown} from "react-icons/fa";

const NotFoundPage = () => {
    return <div className="not-found">
        <FaRegFrown/>
        <span className="number">404</span>
        <span className="error">ERROR</span>
    </div>;
};

export default NotFoundPage;