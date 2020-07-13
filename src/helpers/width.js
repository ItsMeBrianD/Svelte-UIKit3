export const validWidths = [
    "1-1",
    "1-2",
    "1-3",
    "2-3",
    "1-4",
    "3-4",
    "1-5",
    "2-5",
    "3-5",
    "4-5",
    "1-6",
    "5-6",
    "small",
    "medium",
    "large",
    "xlarge",
    "2xlarge",
    "auto",
    "expand"
];

export const getWidthClass = (width) => {
    if(typeof width === "undefined" || !width || width === "") return;
    if(validWidths.includes(width.toLowerCase())){
        return "uk-width-" + width.toLowerCase();
    } else {
        console.warn("Invalid width given: " + width);
        return "";
    }
};