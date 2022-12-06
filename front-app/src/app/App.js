import React, {Component} from 'react';
import Category from './category/Category';
import MainBanner from './banner/MainBanner';

import './App.css';
import './common.css';

class App extends Component {
  state = {
    onCateToggle: false
  };

  constructor(props) {
    super(props);  

    this.openCategory = this.openCategory.bind(this);
  }

  openCategory() {
    this.setState({ onCateToggle: true });
  }

  render() {
    return (
      <div>
        
        <div className="header">
          <div className="header-top">
            <div className="h-30 flex flex-center">
              <div className="left-items">

              </div>

              <div className="flex right-items">
                <p className="mr-30">로그인</p>
                <p className="mr-30">고객센터</p>
              </div>
            </div>
          </div>

          <div className="nav">
            <div className="flex flex-center">
              
              <div className="category flex flex-center flex-column"
                   onMouseOver={this.openCategory}>
                  <img className="category-item" 
                      src={`${process.env.PUBLIC_URL}/images/icon-cate.png`}
                      alt="noimg">
                  </img>
                  카테고리
              </div>

              <div className="logo flex flex-center">
                <img className="logo-item"
                        src={`${process.env.PUBLIC_URL}/images/geol.png`}
                        alt="noimg"></img>
              </div>

              <div className="search flex flex-center">
                <label htmlFor="search" className="search-box flex flex-center">
                  <input type="text" id="search"></input>
                  <img className="search-btn" src={`${process.env.PUBLIC_URL}/images/searching-1.png`} alt="noimg"></img>
                </label>
              </div>

              <div className="mypage flex flex-center flex-column">
                <img className="mypage-btn" src={`${process.env.PUBLIC_URL}/images/mypage.png`} alt="noimg"></img>
                마이페이지
              </div>
              <div className="cart flex flex-center flex-column">
                <img className="mypage-btn" src={`${process.env.PUBLIC_URL}/images/cart.png`} alt="noimg"></img>
                장바구니
              </div>
            </div>
          </div>

          <Category isShow={this.state}></Category>

          <div className="main-banner-wrap">
            <MainBanner />
          </div>
        </div>
      </div>)
  }
};

export default App;
