import React, {Component} from 'react';

class Category extends Component {
    
    onToggle = {
        show: this.props.isShow.onCateToggle
    };

    on(flag) {
        
        if( flag === true ) {
            document.getElementsByClassName("menu-board")[0].classList.add("show");
        }

    }

    off() {
        document.getElementsByClassName("menu-board")[0].classList.remove("show");
    }

    render() {

        return (
            <div className="category-detail flex flex-center">
                <div className="detail-component">
                    <div className={`menu-board ${this.on(this.props.isShow.onCateToggle)}`}
                        onMouseLeave={this.off}>
                        <ul> 
                            <li> 생활용품 </li>
                        </ul>
                        <ul>
                            <li> 컴퓨터/가전 </li>
                        </ul>
                        <ul>
                            <li> 인테리어 </li>
                        </ul>
                        <ul>
                            <li> 식품 </li> 
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;