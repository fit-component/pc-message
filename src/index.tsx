/// <reference path="../../../../typings/tsd.d.ts" />
import Notice from './notice'

function notice(content: string, duration: number = 2, type?: string, onClose?: Function) {
    let instance = Notice.newInstance({
        content: content,
        type: type
    })

    setTimeout(()=> {
        if (instance) {
            instance.destroy()
        }
        onClose && onClose()
    }, duration * 1000)
}

export default {
    info(content: string, duration?: number, onClose?: Function) {
        return notice(content, duration, 'info', onClose)
    },
    success(content: string, duration?: number, onClose?: Function) {
        return notice(content, duration, 'success', onClose)
    },
    error(content: string, duration?: number, onClose?: Function) {
        return notice(content, duration, 'error', onClose)
    },
    warning(content: string, duration?: number, onClose?: Function) {
        return notice(content, duration, 'warning', onClose)
    },
    loading(content: string, duration?: number, onClose?: Function) {
        return notice(content, duration, 'loading', onClose)
    }
}