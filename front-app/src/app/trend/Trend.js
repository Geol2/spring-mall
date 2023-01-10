import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Trend.css';

class Trend extends Component {

    render() {
        return (
            <div className="trend">
                <div className="trend-wrap">
                    <div className="sz-20 hard">HOT! TREND</div>
                    <div className="hard">
                        카테고리별 
                        <div className="inline peter-river"> 추천 광고상품</div> 
                    </div>
                    <div className="peter-river line"></div>
                    <div className="flex flex-around trend-container">
                        <div className="w10per h100per">
                            <div className="flex flex-column flex-between h100per ">
                                <div className="flex flex-column m-10">
                                    <div className="trend-name w100per">
                                        도서<br></br>
                                        CD<br></br>
                                        DVD <br></br>
                                    </div>
                                    <div className="go-category">
                                        > 바로가기
                                    </div>
                                </div>
                                
                                <div className="flex flex-column flex-center hot-keyword m-10">
                                    <div className="hot-keyword-wrap">
                                        HOT 키워드
                                    </div>
                                    <a className="keyword-btn">#흔한남매</a>
                                    <a className="keyword-btn">#색칠공부</a>
                                    <a className="keyword-btn">#한글공부</a>
                                    <a className="keyword-btn">#요리책</a>
                                </div>
                            </div>
                        </div>
                        <div className="trend-img ">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide>
                                    <div className="trend-slide-wrap">
                                        <img className="trend-slide-img" src={`${process.env.PUBLIC_URL}/images/trend/trend-1.jpg`} alt="noimg" />
                                        <div className="trend-slide-txt">
                                            인기 어린이 도서 기획전<br></br>
                                            삼성출판사 / 마이리틀타이거
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trend-slide-wrap">
                                        <img className="trend-slide-img" src={`${process.env.PUBLIC_URL}/images/trend/trend-2.jpg`} alt="noimg" />
                                        <div className="trend-slide-txt">
                                            해외 도서<br></br>
                                            원서로 느끼는 즐거움
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trend-slide-wrap">
                                        <img className="trend-slide-img" src={`${process.env.PUBLIC_URL}/images/trend/trend-3.jpg`} alt="noimg" />
                                        <div className="trend-slide-txt">
                                            기탄전집 & 학습지 기획전<br></br>
                                            가성비 그뤠잇!
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trend-slide-wrap">
                                        <img className="trend-slide-img" src={`${process.env.PUBLIC_URL}/images/trend/trend-4.jpg`} alt="noimg" />
                                        <div className="trend-slide-txt">
                                            인기 어린이 도서 기획전<br></br>
                                            흔한남매 / 엉덩이 기획전
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trend-slide-wrap">
                                        <img className="trend-slide-img" src={`${process.env.PUBLIC_URL}/images/trend/trend-5.jpg`} alt="noimg" />
                                        <div className="trend-slide-txt">
                                            인기 어린이 도서 기획전<br></br>
                                            필독 도서 읽기 동화세트
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="trend-prod">
                            상품들
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trend;