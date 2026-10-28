import React from "react";
import {TEXTData} from "../data/TEXTDATA";

const Text = () => {
    return (<section id="textType">
    <span>텍스트 유형</span>
    <h2>다체로운 베이커리 컬렉션</h2>
    <div className="container text_inner">
        {TEXTData.map((TEXT, index)=>(
    <div className={`txt t${text.id}`} key={idx} >
        <div className="text_title">{TEXT.title}</div>
        <div className="text_span">{TEXT.desc}</div>
    </div>
    ))};
    </div>
    </div>
</section>
):
};

export default Text;
