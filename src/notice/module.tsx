export interface PropsDefine {
    /**
     * 类型
     */
        type?: string
    /**
     * 内容
     */
    content?: string

    [x: string]: any
}

export const defaultProps: PropsDefine = {
    type: 'info'
}

export interface StateDefine {

}

export const defaultState: StateDefine = {}