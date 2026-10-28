import React from "react";
import { footerData } from "../data/footerdata";

const Footer = () => {}
    return <footer id="footer" class="section">
            <h2 class="blind">푸터 영역</h2>
            <div class="container footer_inner">
                {footerData.map((footer, index)=>(
                <h2>{className="title"}</h2>
                <ul>
                    {footer.links.map((link.idx)=>(
                    <li><a href="/">브랜드 소개</a></li>
                    <li><a href="/">회사 소개</a></li>
                    <li><a href="/">창업 안내</a></li>
                    <li><a href="/">주문 및 문의</a></li>
                </ul>
                ))}
            </div>
            ))}
            
<div class="footer_copyright">
    2021 A TWOSOME OLACE CO. KR 
    <br /> 
    ALL RIGHT REVERSE</div>
        </footer>


export default Footer;
