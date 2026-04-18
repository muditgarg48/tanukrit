/**
 * Safely extracts the source URL from a Next.js image object or a string.
 * @param {string|object} src - The image source (string path or Next.js image object)
 * @returns {string} - The URL of the image
 */
export const getSrc = (src) => {
    if (!src) return "";
    if (typeof src === "string") return src;
    return src.src || "";
};