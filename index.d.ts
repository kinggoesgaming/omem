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
export function memoize<Value>(key: string, getValue: () => Value): Value;

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
export function memoizeAsync<Value>(key: string, getValue: () => Promise<Value>): Promise<Value>;

/**
 * Clears a memoized value.
 * 
 * @param {string} key - The key to clear the memoized value under
 */
export function clearMemoized(key: string): void;

/**
 * Clears all memoized values.
 */
export function clearAllMemoized(): void;

declare global {
  var __omem__: Map<string, any>;
}
