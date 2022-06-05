window.dom = {

    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)[0]
    },
        
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (typeof name === 'string') {
            return node.style[name]
        } else if (name instanceof Object) {
            const name = object
            for (let key in object) {
            node.style[key] = object[key]
            }
        }
    },
        
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}


