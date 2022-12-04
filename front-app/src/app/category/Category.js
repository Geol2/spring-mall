import React, {Component} from 'react';

class Category extends Component {
    
    onToggle = {
        show: this.props.isShow.onCateToggle
    };

    constructor(props) {
        super(props);
    }

    on(flag) {
        
        if( flag === true ) {
            document.getElementsByClassName("menu-board")[0].classList.add("show");
        }

    }

    off() {
        console.log(1);
        document.getElementsByClassName("menu-board")[0].classList.remove("show");
    }

    render() {

        return (
            <div className="category-detail flex flex-center">
                <div className="detail-component">
                    <div className={`menu-board ${this.on(this.props.isShow.onCateToggle)}`}
                        onMouseLeave={this.off}>
                        <ul> 생활용품 </ul>
                        <ul> 컴퓨터/가전 </ul>
                        <ul> 인테리어 </ul>
                        <ul> 식품 </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;