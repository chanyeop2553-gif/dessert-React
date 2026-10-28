import React from "react";
import { imageTextData2 } from "../data/imagetextData";

const Imagetext = () => {
    return (
        <div>
            <section id="imageText" class="section">
            <h1 class="blind">이미지 텍스트 유형</h1>
            <div class="contaniner imageText_inner">
                <div class="imageText_txt">
                    <div class="small">이미지/텍스트 유형</div>
                    {< className="map"((Text, index)=>(/
                    <div class="title">디져트 사이트 살펴보기</div>
                    <div class="desc">제빵사, 파티시에, 요식업 종사자를 위한 유용한 사이트 입니다</div>
                    ))}
                    <ul class="list">
                        {imageTextData2.map((title, index)=>(
                        <li><a href="#">투썸 플레이스 사이트</a></li>
                    </ul>
                </div>
                ))}
                <div className={`"imageText_img img${text.id`}"`}>
                    <img src="img/시금치 포카치.png" alt="" />
                    <a href="#"></a>
                </div>
                <div class="imageText_img img2">
                    <img src="img/딸기 해파리.png" alt="" />
                    <a href="#"></a>
                </div>
            </div>
        </section>
    );
};

export default Imagetext;
