/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {
    nav_select, nav_select_index, animationName,
    animationName_fade,
    animationName_translateX,
    animationName_bottom2top
} from '../../myConst.js'
import Icon from './icon'
import {find, getSize} from '../../util/dom'

class BooksList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    clickNav(navIndex) {
        var me = this;
        var {history, actions} = me.props
        switch (navIndex) {
            case 1:
                actions[nav_select]({
                    [animationName]: animationName_fade,
                    [nav_select_index]: 1
                })
                history.push({
                    pathname: '/app/home'
                })
                break;
            case 2:
                actions[nav_select]({
                    // [animationName]: animationName_translateX,
                    [animationName]: animationName_bottom2top,
                    [nav_select_index]: 2
                })
                history.push({
                    pathname: '/app/add'
                })
                break;
            case 3:
                actions[nav_select]({
                    [animationName]: animationName_bottom2top,
                    [nav_select_index]: 3
                })
                history.push({
                    pathname: '/app/mine'
                })
                break;
        }

    }

    columns(navIndex) {
        var me = this;
        var html = [];
        html.push(<div key={1} onClick={this.clickNav.bind(me, 1)}
                       className={navIndex == 1 ? "active_select" : "active_select_no"}
        >
            <Icon name='home' fill={navIndex == 1 ? '#fff' : "#2222"} {...this.props}/>
            <div>主页</div>
        </div>)
        html.push(<div key={2} onClick={this.clickNav.bind(me, 2)}
                       className={navIndex == 2 ? "active_select" : "active_select_no"}
        >
            <Icon name='add' fill={navIndex == 2 ? '#fff' : "#2222"} {...this.props}/>
            <div>写作</div>
        </div>)
        html.push(<div key={3} onClick={this.clickNav.bind(me, 3)}
                       className={navIndex == 3 ? "active_select" : "active_select_no"}
        >
            <Icon name="mine" fill={navIndex == 3 ? '#fff' : "#2222"} {...this.props}/>
            <div>我的</div>
        </div>)

        return html
    }

    render() {
        var me = this;
        var {state} = this.props;
        return <div className="src_page_App_js_bottom">
            {me.columns.call(this, state[nav_select_index])}
        </div>
    }
}


export default BooksList