/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

class Type extends Component {
    render() {
        return <div style={styles.label}>
            {this.props.children}
        </div>
    }
}

const styles = {
    label: {
        width: '55px',
        height: '30px',
        lineHeight: '30px',
        backgroundColor: '#eee',
        textAlign: 'center',
        borderRadius: '5px',
        marginLeft: '5px',
        padding: '5px',
        overflow: 'hidden'
    }
}
export default Type