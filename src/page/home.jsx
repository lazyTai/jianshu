/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {Image} from 'semantic-ui-react'
import back from '../assets/icon/back_white.png'
import mineIcon from "../assets/icon/mine_white.png"
import Swiper from './component/app.swiper'
import Icon from './component/icon.jsx'
import Type from './component/app.type.jsx'
import Content from "./component/app.content.jsx"
import "../assets/home.css"

class Home extends Component {
    componentDidMount() {
    }

    showDraw() {
        var {drawer, backMark} = this.refs
        drawer.classList.add('active_in');
        backMark.classList.toggle('active');
    }

    closeShow() {
        var {drawer, backMark} = this.refs
        drawer.classList.add('active_out');
        backMark.classList.toggle('active');
        setTimeout(function () {
            drawer.classList.remove('active_out');
            drawer.classList.remove('active_in');
        }, 500)

    }

    render() {
        return <div className="page_home" ref="container">
            {/*draw*/}
            <div className="drawer" ref="drawer">
                sdfsdfsdf
            </div>
            <div className="backMark" ref="backMark" onClick={this.closeShow.bind(this)}></div>


            <header className="src_page_home_js_header">
                <div className="src_page_home_js_header_left" onClick={this.showDraw.bind(this)}
                >
                    <Icon fill="#fff" name="peizhi" height="25" width="25"/>
                </div>

                <div className="src_page_home_js_header_title">home</div>
                <div className="src_page_home_js_header_right">
                       <img src={mineIcon} width={25} height={25} />
                </div>
            </header>

            <Swiper {...this.props}/>


            <div className="src_page_home_js_typewrapper">
                <Type>asdasd</Type>
                <Type>asdasd</Type>
                <Type>asdasd</Type>
            </div>

            <div className="src_page_home_content_wrapper">
                <Content> </Content>
                <Content> </Content>
                <Content> </Content>
                <Content> </Content>
                <Content> </Content>
            </div>


        </div>
    }
}


export default Home