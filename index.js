/**
 * Memoizes a value.
 * 
 * @template Value - The type of the value to memoize.
 *  
 * @param {string} key - The key to memoize the value under.
 * @param {() => Value} getValue - The callback function that returns the value to memoize.
 * 
 * @returns {Value} The memoized value.
 */
export function memoize(key, getValue) {
  /**
   * @type {Map<string, Value>}
   */
  globalThis.__omem__ ??= new Map();

  if (!globalThis.__omem__.has(key)) {
    globalThis.__omem__.set(key, getValue());
  }

  return globalThis.__omem__.get(key);
}

/**
 * Memoizes an async value.
 * 
 * @template Value - The type of the value to memoize.
 * 
 * @param {string} key - The key to memoize the value under.
 * @param {() => Promise<Value>} getValue - The callback function that returns the value to memoize.
 * 
 * @returns {Promise<Value>} The memoized value.
 */
export async function memoizeAsync(key, getValue) {
  /**
   * @type {Map<string, Value>}
   */
  globalThis.__omem__ ??= new Map();

  if (!globalThis.__omem__.has(key)) {
    globalThis.__omem__.set(key, await getValue());
  }

  return globalThis.__omem__.get(key);
}

/**
 * Clears a memoized value.
 * 
 * @param {string} key - The key to clear the memoized value under
 */
export function clearMemoized(key) {
  globalThis.__omem__.delete(key);
}

/**
 * Clears all memoized values.
 */
export function clearAllMemoized() {
  globalThis.__omem__.clear();
}
