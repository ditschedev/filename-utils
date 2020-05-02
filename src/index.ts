/**
 * Extracts the extension of a given filename.
 * Support files without filename or files starting
 * with a ".".
 *
 * @param {string} filename The full filename of the file.
 * @returns {string} The extension of the file or an empty string.
 */
export function getExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}

/**
 * Strips the extension of a filename and returns
 * the true base name of the file.
 *
 * @param {string} filename The full filename of the file.
 * @returns {string} The base name of the file.
 */
export function getBaseName(filename: string): string {
  return _stripExtension(filename);
}

/**
 * Strips the extension of a given filename.
 *
 * @param {string} filename The full filename of the file.
 * @returns {string} The base name of the file.
 */
function _stripExtension(filename: string): string {
  let extension: string = getExtension(filename);
  if(extension === "") return filename;
  return filename.substring(0, filename.lastIndexOf('.' + extension));
}