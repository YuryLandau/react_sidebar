// import React, { useState } from "react";

import Option from './navigation/Option';
import Logo from '../src/img/Logo.svg';
import usuario from './usuario/Usuario';
import UserName from './usuario/UserName';
import scripts from './Scripts';

// const [desce, menuDrop] = useState("none");

function Sidebar(){
    return (
        <aside>
        
        <a href="#" id="logo">
            <img src={Logo} alt=""/>
        </a>
        
        <UserName cargo={usuario.cargo} user-name={usuario.name}></UserName>
        
        <nav>
            <ul>
                <Option script={scripts.empty} value="Dashbdasoard"/>
                <Option script={scripts.empty} value="Trades"/>
                <Option script={scripts.empty} value="Organizations"/>
                <Option script={scripts.empty} value="Users"/>
                <Option script={menuDrop(desce = "block")} value="Rate Settings"/>
            </ul>
            
            <nav id="settings" className="settings_NotDisplay">
                <ul>
                    <Option script={scripts.empty} value="Daily Rates"/>
                    <Option script={scripts.empty} value="Daily Rate History"/>
                    <Option script={scripts.empty} value="Daily Rate Proposals"/>
                </ul>
            </nav>
        </nav>

        <div className="logout">
        Logout
        </div>
        </aside>
        );
    }
    
    export default Sidebar;