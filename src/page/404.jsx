/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

class p404 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 5,
            indexInterval: 0,
        }
    }

    componentDidMount() {
        var me = this;
        var {history} = this.props;
        const indexInterval = setInterval(function () {
            me.setState({
                min: (me.state.min - 1)
            })
        }, 1000)
        me.setState({
            indexInterval: indexInterval
        })
        setTimeout(function () {
            clearInterval(me.state.indexInterval)
            history.push('/')
        }, 5000)
    }

    componentWillUnmount() {

    }

    render() {
        return <div className="404" style={styles.container} ref="container">
            <div style={styles.container_text}>
                <div>404</div>
                <div>沒有這個界面</div>
                <div>{this.state.min}秒之后跳转到首页</div>
            </div>
        </div>
    }
}

const styles = {
    container: {
        width: "100%",
        height: '100%',
        textAlign: "center",
        backgroundColor: '#eee'
    },
    container_text: {
        position: "absolute",
        top: "50%",
        left: '50%',
        marginTop: "-60px",
        marginLeft: "-60px"
    }
}
export default p404