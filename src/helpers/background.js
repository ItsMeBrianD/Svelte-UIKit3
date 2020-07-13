// Colored Backgrounds
export const backgroundColors = [
    "default",
    "primary",
    "secondary",
    "muted"
];

/**
 * @param {string} color
 * @param {boolean} primaryIsLight Include uk-light if color is primary
 * @param {boolean} secondaryIsLight Include uk-light if color is secondary
 */
export const getBackgroundColorClass = (color, primaryIsLight = true, secondaryIsLight = true) => {
    switch (color.toLowerCase()) {
        case "primary":
            return primaryIsLight ? "uk-background-primary uk-light" : "uk-background-primary";
        case "secondary":
            return secondaryIsLight ? "uk-background-secondary uk-light" : "uk-background-secondary";
        case "muted":
        case "default":
            return "uk-background-" + color.toLowerCase();
        default:
            return "";
    }
}
// Image Backgrounds
export const backgroundSizes = [
    "cover",
    "contain"
];
export const getBackgroundSizeClass = (size) => {
    if (backgroundSizes.includes(size.toLowerCase())) {
        return "uk-background-" + size;
    } else {
        return "";
    }
}
export const backgroundPositions = [
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center-center",
    "center-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
];
export const getBackgroundPositionClass = (pos) => {
    if (backgroundPositions.includes(pos.toLowerCase())) {
        return "uk-background-" + pos;
    } else {
        return "";
    }
}