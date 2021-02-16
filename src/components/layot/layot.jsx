import React, {Fragment} from "react";
import Header from "../header/header";
import Content from "../content/content";
import Footer from "../footer/footer";

const Layout = () => {
    return (
        <Fragment>
           <Header/>
           <Content/>
           <Footer/>
        </Fragment>
    )
};

export default Layout;