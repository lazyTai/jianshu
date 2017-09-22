/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import "../assets/mine.css"

class mine extends Component {
    componentDidMount() {
        // $(document).scrollTop() + $(window).height() > $(document).height() - 20
        // this.refs['container'].style.height = window.innerHeight + "px"
    }

    render() {
        return <div className="page_mine" ref="container">min</div>
    }
}


export default mine