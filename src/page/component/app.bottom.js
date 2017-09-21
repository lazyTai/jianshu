/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {Button, Grid, Icon} from 'semantic-ui-react'
import {
    nav_select, nav_select_index, animationName,
    animationName_fade,
    animationName_translateX,
    animationName_bottom2top
} from '../../myConst.js'

class BooksList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    clickNav(navIndex) {
        var me = this
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
                    [animationName]: animationName_translateX,
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
        html.push(<Grid.Column key={1} onClick={this.clickNav.bind(me, 1)}
                         className={navIndex == 1 ? "active_select" : "active_select_no"}
            >
                <div style={styles.bottomTab}>
                    <Icon name='home' size='big'/>
                    <div>主页</div>
                </div>
            </Grid.Column>)
            html.push(<Grid.Column key={2} onClick={this.clickNav.bind(me, 2)}
                                   className={navIndex == 2 ? "active_select" : "active_select_no"}
        >
            <div style={styles.bottomTab}>
                <Icon name='add' size='big'/>
            </div>
        </Grid.Column>)
            html.push(<Grid.Column key={3} onClick={this.clickNav.bind(me, 3)}
                                   className={navIndex == 3 ? "active_select" : "active_select_no"}
        >
            <div style={styles.bottomTab}>
                <Icon name='id badge' size='big'/>
                <div>我的</div>
            </div>
        </Grid.Column>)

        return html
    }

    render() {
        var me = this;
        var {state} = this.props;
        return <div style={{position: 'relative'}}>
            <Grid columns={3} style={styles.bottom} divided>
            {me.columns.call(this, state[nav_select_index])}
        </Grid>
        </div>
    }
}

const styles = {
    bottom: {
        marginLeft: 0,
        borderTop: '1px solid #eee',
        position: "fixed",
        bottom: 0,
        width: '100%',
        // maxWidth: '700px'
    },
    bottomTab: {
        textAlign: 'center'
    }
}
export default BooksList