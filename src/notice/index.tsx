import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as modules from './module'
import './index.scss'

export default class Notice extends React.Component <modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    static newInstance = (props: modules.PropsDefine) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const instance = ReactDOM.render(<Notice {...props}/>, div)

        return {
            destroy() {
                ReactDOM.unmountComponentAtNode(div)
                document.body.removeChild(div)
            }
        }
    }

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = modules.defaultState
    }

    render() {
        let typeClass = classNames({
            'lyct': true,
            [this.props.type]: true
        })

        return (
            <div className="_namespace">
                <div className="m-layer z-show">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <article className="lywrap">
                                    <section className={typeClass}>
                                        {this.props.content}
                                    </section>
                                </article>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}