// Colored Backgrounds
export const backgroundColors = [
    "default",
    "primary",
    "secondary",
    "muted"
];

export const getBackgroundColorClass = (color) => {
    if (backgroundColors.includes(color.toLowerCase())) {
        return "uk-background-" + color.toLowerCase();
    } else {
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