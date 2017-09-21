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

class mine extends Component {
    componentDidMount() {
    }

    render() {
        return <div className="home" style={styles.container} ref="container">
            <header style={styles.header}>
                <div style={styles.left}>
                    {/*<Image src={back} width={25} height={25}/>*/}
                </div>

                <div style={styles.title}>home</div>
                <Image src={mineIcon} width={25} height={25}/>
            </header>

            <Swiper {...this.props}/>
            home</div>
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
    }
}
export default mine