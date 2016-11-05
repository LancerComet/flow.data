/**
 * Detect target's type.
 * 
 * @param {any} target
 * @returns {string}
 */
export default function typeDetective (target) {
  return Object.prototype.toString.call(target).match(/\ \w+/)[0].replace(' ', '')
}
