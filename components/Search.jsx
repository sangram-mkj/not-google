import {React} from "react";
import { useState } from "react";
import {useNavigate, BrowserRouter, Link} from "react-router-dom";

import { useStateValue } from "../provider/stateProvider";
import { actionTypes } from "../provider/reducer";



 
export const Search = () => {
    const dispatch = useStateValue();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    
    
    // const handleChange = (e) => {
    //     setText(e.target.value);
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            payload: text,
        });
        navigate('/search');
    }
    

    return (
        <>
        <div>
            <img className="mainImage" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.girlguiding.org.uk%2Fglobalassets%2Fimage-library%2Fgraphics%2Flogos-from-other-orgs%2Fgoogle-logo.png&f=1&nofb=1' alt="mainLogo"></img>
        </div>
        <div className="search-bar form-inline">
        <form action="POST" onSubmit={onSubmit}>
            <input className="search-box" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search"/>
        </form>
        
        </div>
        </>
    );
}
