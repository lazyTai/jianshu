/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {Image} from 'semantic-ui-react'
import imag1 from '../../assets/testImage/images.png'
import imag2 from '../../assets/testImage/200_s.gif'
import imag3 from '../../assets/testImage/hello1.jpg'
import {CSSTransitionGroup} from 'react-transition-group'

class Swiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startTouchX: 0,
            endTouchX: 0,
            moveDirection: 0,
            animation: 'toLeft',
            indexImageNow: 1,
            imageList: [
                imag1, imag2, imag3
            ]
        }
    }

    onTouchStart(ev) {
        ev.preventDefault();
        var touches = ev.changedTouches;
        var touche = null;
        if (!touches) {
            touche = ev
        } else {
            touche = touches[0]
        }
        this.setState({
            startTouchX: touche.pageX
        })
    }

    onTouchEnd(ev) {
        ev.preventDefault();
        var touches = ev.changedTouches;
        var touche = null;
        if (!touches) {
            touche = ev
        } else {
            touche = touches[0]
        }
        this.setState({
            endTouchX: touche.pageX,
            moveDirection: (touche.pageX - this.state.startTouchX)
        })
        this.moveImage.call(this)


    }

    moveImage() {
        var indexImageNow = JSON.parse(JSON.stringify(this.state.indexImageNow))
        if (this.state.moveDirection > 0) {/*right*/
            if (indexImageNow < 3) {
                indexImageNow = indexImageNow + 1;
            } else {
                indexImageNow = 1;
            }
            this.setState({
                indexImageNow,
                animation: 'toright'
            })
        } else {/*left*/
            if (indexImageNow > 1) {
                indexImageNow = indexImageNow - 1;

            } else {
                indexImageNow = 3
            }
            this.setState({
                indexImageNow,
                animation: 'toleft'
            })
        }

    }

    componentDidMount() {
        var clickOrTouchStart = (('ontouchstart' in window)) ? 'touchstart' : 'mousedown';
        var clickOrTouchend = (('ontouchstart' in window)) ? 'touchend' : 'mouseup';
        this.refs['wrapperSwiper'].addEventListener(clickOrTouchStart, this.onTouchStart.bind(this))
        this.refs['wrapperSwiper'].addEventListener(clickOrTouchend, this.onTouchEnd.bind(this))
    }

    renderNavItems() {
        var me = this;
        let {imageList, indexImageNow} = this.state
        var html = [];
        for (let i = 0; i < imageList.length; i++) {
            html.push(<div
                style={styles.navItem}
                className={['_navItem', indexImageNow - 1 == i ? 'active' : ''].join(" ")}
                key={"fdgjdalf" + indexImageNow + i}
            >
                <div key={"fdgjdlf" + i}></div>
            </div>)
        }
        return html

    }

    render() {
        var {animation, indexImageNow, imageList} = this.state;
        return <div className="swiper" style={styles.wrapper}
                    ref="wrapperSwiper"
        >
            <CSSTransitionGroup
                transitionName={animation}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={200}
                style={styles.container}
            >
                <img src={imageList[indexImageNow - 1]}
                     style={styles.item}
                     key={"fghfghj1" + indexImageNow}/>
            </CSSTransitionGroup>
            <div className="navItems" style={styles.navItems}>
                {this.renderNavItems.call(this)}
            </div>

        </div>
    }
}

const styles = {
    wrapper: {
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        width: "100%",
        height: "260px"
    },
    container: {
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        width: "100%",
        height: "100%"
    },
    item: {
        position: "absolute",
        top: '0',
        width: "100%",
        height: "250px"
    },
    navItems: {
        position: 'absolute',
        bottom: '20px',
        width: "100%",
        display: "flex",
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    navItem: {
        width: "10px",
        height: "10px",
        backgroundColor: "#eee",
        border: '1px solid #eee',
        borderRadius: "50%",
        marginLeft: '10px'
    }
}
export default Swiper