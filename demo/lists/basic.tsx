import * as React from 'react'
import Button from '../../../button/src'
import Message from '../../src'

export default class Demo extends React.Component <any,any> {
    onClick() {
        Message.info('显示提示')
    }

    render() {
        return (
            <Button onClick={this.onClick.bind(this)}>全局提示</Button>
        )
    }
}