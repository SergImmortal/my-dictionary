import React, { useEffect, useState } from 'react'
import './article.css'
import Btn from "../btn/btn";
import { Link } from "react-router-dom";



const Article = () => {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [quoteIsLoaded, setQuoteIsLoaded] = useState(false);

    useEffect(() => {
        if (!window.sessionStorage.getItem("quote")) {
            if (!quoteIsLoaded) {
                fetch('https://api.quotable.io/random')
                    .then(data => data.json())
                    .then(data => {
                        setQuoteIsLoaded(true);
                        setAuthor(data.author);
                        setQuote(data.content);
                        window.sessionStorage.setItem("quote", JSON.stringify(
                            {
                                quoute: data.content,
                                author: data.author
                            }
                        ));
                        console.log(data);
                    }, []);
            }
        } else {
            const dataSet = JSON.parse(window.sessionStorage.getItem("quote"));
            setQuoteIsLoaded(true);
            setAuthor(dataSet.author);
            setQuote(dataSet.quoute);
        }
    });

    return (
        <div className='article'>
            {quoteIsLoaded && <q>{quote} &#169; {author}</q>}
            <div className='wrap'>
                <Link to="/info" className='link'>
                    <Btn label='MORE ENGLISH' />
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