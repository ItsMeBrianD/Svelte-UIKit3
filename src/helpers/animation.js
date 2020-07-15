import {checkAndSet, checkAndUpdate} from "./action_helpers";

export const animations = [
    "fade",
    "scale-up",
    "scale-down",
    "slide-top",
    "slide-bottom",
    "slide-right",
    "slide-top-small",
    "slide-bottom-small",
    "slide-right-small",
    "slide-top-medium",
    "slide-bottom-medium",
    "slide-right-medium",
    "kenburns",
    "shake",
];

export const transformations = [
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
]

const getAnimationClass = (animation) => {
    if(typeof animation === "undefined" || !animation || animation === "") return false;
    if(animations.includes(animation.toLowerCase())){
        return "uk-animation-" + animation.toLowerCase();
    } else {
        console.warn("Invalid animation given: " + animation);
        return false;
    }
};

const getTransformationClass = (transform) => {
    if(typeof transform === "undefined" || !transform || transform === "") return false;
    if(transformations.includes(transform.toLowerCase())){
        return "uk-transform-origin-" + transform;
    } else {
        console.warn("Invalid transformation origin given: " + transform);
        return false;
    }
}

export const uk_animate = (node, params) => {
    let {animation, origin, reverse, fast} = params;

    let oldAnimation = animation;
    let oldOrigin = origin;
    let oldReverse = reverse;
    let oldFast = fast;
    if(checkAndSet(node, animation, getAnimationClass)){
        checkAndSet(node, origin, getTransformationClass);

        // Handle simple cases
        if(reverse){
            node.classList.add("uk-animation-reverse");
        }
        if(fast){
            node.classList.add("uk-animation-fast");
        }
    }
    return {
        update(params){
            let {animation, origin, reverse, fast} = params;
            if(animation !== oldAnimation){
                // if animation has changed
                checkAndUpdate(node, oldAnimation, animation, getAnimationClass);
                oldAnimation = animation;
            }
            if(!(typeof animation === "undefined" || !animation || animation === "")) {
                // if animation exists
                if(origin !== oldOrigin){
                    checkAndUpdate(node, oldOrigin, origin, getTransformationClass);
                    oldOrigin = origin;
                }
                if(reverse !== oldReverse){
                    // if reverse !== oldReverse && oldReverse then reverse must be false
                    // if reverse !== oldReverse && !oldReverse then reverse must be true

                    if(oldReverse) node.classList.remove("uk-animation-reverse");
                    else node.classList.add("uk-animation-reverse");
                }
                if(fast !== oldFast){
                    if(oldFast) node.classList.remove("uk-animation-fast");
                    else node.classList.add("uk-animation-fast");
                }
            }
        }
    };
}