import * as React from 'react'
import Button from '../../../button/src'
import Message from '../../src'

export default class Demo extends React.Component <any,any> {
    onClick(type: string) {
        switch (type) {
            case 'info':
                Message.info('默认', 3)
                break
            case 'success':
                Message.success('成功', 3)
                break
            case 'error':
                Message.error('错误', 3)
                break
            case 'warning':
                Message.warning('警告', 3)
                break
            case 'loading':
                Message.loading('加载', 3)
                break
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this.onClick.bind(this,'info')}>默认</Button>
                <Button onClick={this.onClick.bind(this,'success')}
                        style={{marginLeft:10}}>成功</Button>
                <Button onClick={this.onClick.bind(this,'error')}
                        style={{marginLeft:10}}>错误</Button>
                <Button onClick={this.onClick.bind(this,'warning')}
                        style={{marginLeft:10}}>警告</Button>
                <Button onClick={this.onClick.bind(this,'loading')}
                        style={{marginLeft:10}}>加载</Button>
            </div>
        )
    }
}