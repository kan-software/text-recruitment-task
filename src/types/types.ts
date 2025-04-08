/**
 * `KeyMap` is a utility type that represents an object with string keys and values of type `T`.
 * @template T - The type of the values in the key-value pairs. Defaults to `any`.
 * @returns {Record<string, T>} - An object type with string keys and values of type `T`.
 * @example
 * ```
 * const user: KeyMap<string> = {
 *   name: 'John',
 *   age: '30',
 * };
 * ```
 * @remarks
 * This type is useful when you want to create an object that maps string keys to values of a certain type. It can be particularly useful in the context of react-redux, where you might want to represent a portion of the state as a key-value map.
 * @see `Record` - A built-in TypeScript utility type used to construct the `KeyMap` type.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type KeyMap<T = any> = Record<string, T>;
