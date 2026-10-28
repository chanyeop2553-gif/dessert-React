import React from "react";

const Slider = () => {
    return (
        <div>
            <section id="sildeType">
            <h2 class="blind">이미지 유형</h2>
        </section>
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="sildeType"><img src="img/슬라이드 유형.jpg" alt="" /></div>
                <div className="sildeType"><img src="img/slide img 2.png" alt="" /></div>
                <div className="sildeType"><img src="img/slide img 3.png" alt="" /></div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>

        <!-- Swiper JS -->
        <script src="https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.js"></script>

        <script>
            var swiper = new Swiper(".slideType", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        </script>
    </body>

        <link rel="stylesheet" href="asstes/css/image Type.css" />
        <body>
        <div id="imagType" class="section">
            <h1 class="blind">이미지 유형 만들기</h1>
            <h2>프리미어 케이크와 디저트를 만나보세요</h2>
            <p>
                달콤한 딸기가 듬뿍 베리밤이 찾아옵니다 신선한 생딸기와 부드러운 커스터드 크림이 어우려져 한 입 마다
                풍성한
            </p>
        </div>
    </body>

        <link rel="stylesheet" href="asstes/css/imagetext Type .css" />
        <body></body>
        </div>
    );
};

export default Slider;
