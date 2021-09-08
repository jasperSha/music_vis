import React, {useState} from "react";
import '../../css/header.css'
import {Link, useHistory} from "react-router-dom";





export default function Header(){
    const history = useHistory();

    return(
        <div className='header'>
            <div className={"brand"}>
                <h1>Music Vis</h1>
            </div>

            <div className={"linkContainer"}>
                <div className={"links"}>
                    <Link to='/'>Home</Link>
                </div>


                <div className={"headerLeft"}>
                    <div className={"number"}>

                    </div>
                </div>
            </div>
        </div>

    )
}