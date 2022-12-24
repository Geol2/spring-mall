import React, { Component } from 'react';

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
                    <div className="flex flex-center">
                        <div className="trend-name">
                            식품 
                        </div>
                        <div className="trend-img">
                            식품 이미지
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