export function checkAndSet(node, value, lookupFunc){
    if (!(typeof value === "undefined" || !value || value === "")) {
        let valueClass = lookupFunc(value)
        if (valueClass) {
            node.classList.add(valueClass);
        }
        return true;
    }
    return false;
}

export function checkAndUpdate(node, old, updated, lookupFunc){
    if (!(typeof old === "undefined" || !old || old === "")) {
        // old animation is valid, and needs to be removed
        let oldClass = lookupFunc(old)
        if (oldClass)
            node.classList.remove(oldClass);
    }
    if (!(typeof updated === "undefined" || !updated || updated === "")) {
        // New animation is valid, and needs to be added
        let newClass = lookupFunc(updated)
        if (newClass)
            node.classList.add(newClass);
    }
}