export const validWidths = [
    "1-6",
    "1-5",
    "1-4",
    "1-3",
    "2-5",
    "1-2",
    "3-5",
    "2-3",
    "3-4",
    "4-5",
    "5-6",
    "1-1",
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