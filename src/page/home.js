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
import Icon from './component/icon.js'
import Type from './component/app.type.js'
import Content from "./component/app.content.js"
import "../assets/home.css"

class mine extends Component {
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
        return <div className="home" style={styles.container} ref="container">
            {/*draw*/}
            <div className="drawer" ref="drawer">
                sdfsdfsdf
            </div>
            <div className="backMark" ref="backMark" onClick={this.closeShow.bind(this)}></div>
            <header style={styles.header}>
                <div style={styles.left} onClick={this.showDraw.bind(this)}>
                    <Icon fill="#fff" name="peizhi" height="25" width="25"/>
                </div>

                <div style={styles.title}>home</div>
                <img src={mineIcon} width={25} height={25}/>
            </header>

            <Swiper {...this.props}/>
            <div style={styles.typeWrapper}>
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

const styles = {
    header: {
        display: "flex",
        padding: "5px 10px 5px 10px",
        color: "#fff",
        backgroundColor: "#2185d0",
        boxShadow: 'rgba(0, 0, 0, 0.32) 0px 3px',
        marginBottom: "4px"
    },
    left: {
        width: "25px",
        height: "25px",
    },
    title: {
        flex: 1,
        lineHeight: '25px',
        textAlign: 'center'
    },
    container: {
        width: "100%",
    },
    typeWrapper: {
        display: 'flex'
    }
}
export default mine