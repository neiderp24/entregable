import React,{ useState } from 'react';
import quotes from "../quotes.json";
import Button from './Button';
const random = () => Math.floor(Math.random() * quotes.length);
const colors = ["#44344f","#730FB6","#8EEC00","#00F2FF","#1900FF","#CE1A1A","#EBD700","#E300EB"]
const QuoteBox = () => {
    const [ quote, setQuote] = useState(quotes[random()]);
    const changeQuote = () =>{
        setQuote(quotes[random()])
    }
    const color = colors[Math.floor(Math.random() * colors.length )];
    document.body.style = `background: ${color}`
    return (
        <div className='card' style={{color:color}}>
            <div className='headCard'>
                <i className="fa-solid fa-quote-left"></i>
                <h1 className='phrases'>   {quote.quote}</h1>
            </div>
            <h1 className='nameAuthor'>{quote.author}</h1>
            <Button changeQuote={changeQuote} color={color}/>
        </div>
    );
};
export default QuoteBox;