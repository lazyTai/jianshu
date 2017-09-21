/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

class mine extends Component {
    componentDidMount() {
        // $(document).scrollTop() + $(window).height() > $(document).height() - 20
        // this.refs['container'].style.height = window.innerHeight + "px"
    }

    render() {
        return <div className="add" style={styles.container} ref="container">add</div>
    }
}

const styles = {
    container: {
        width: "100%",
        height: '100%'
    }
}
export default mine