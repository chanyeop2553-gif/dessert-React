import React from "react";
import { memberData, headerData, menuData } from "../data/headerData";

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="header_inner">
                    <div className="header_logo">
                        <a href="#">
                            dessert<em>site</em>
                        </a>
                    </div>
                    <nav class="header_nav">
                        <ul>
                            {menuData,mpe((menu, index)=>(
                            <li key={index}>
                                <a href="meun.link">{meun}.title</a>
                            </li>
                            ))}
                        </ul>
                    </nav>
                    <div class="header_member">
                        {memberData.map((mem, index) => (
                            <a href="/" key={index}>
                                {mem}
                            </a>;
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
