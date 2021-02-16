import React from 'react'
import './article.css'
import Btn from "../btn/btn";
import {Link} from "react-router-dom";

const Article = () => {
    return (
        <div className='article'>
            <q>Your favorite quote</q>
            <div className='wrap'>
                <Link to="/info" className='link'>
                    <Btn label='MORE ENGLISH'/>
                </Link>
                <Link to="/dictionary" className='link effect1'>
                    LET'S GO!
                    <span className="bg"></span>
                </Link>
            </div>
        </div>
    )
};

export default Article;