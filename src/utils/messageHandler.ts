const callbacks: {(message: Message): void}[] = []

export interface Message {
    message: string,
    type: string
}

export const addCallback = (cb: (message: Message) => void) => callbacks.push(cb)

export const emmit = (message: Message) => {
    callbacks.forEach(x => x(message))
}

export default {
    addCallback,
    emmit
}
