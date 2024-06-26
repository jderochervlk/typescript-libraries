/**
 * @since 1.1.0
 */

import { type TaskEither, chainW, tryCatch } from "fp-ts/lib/TaskEither.js"
import { pipe } from "fp-ts/lib/function.js"
import { type ServerError, safeFetch } from "./safeFetch.mjs"

/**
 * @since 1.2.0
 *
 * The JSON returned from the server is invalid.
 */
export type JsonError = Error

/**
 * Safely fetch and attempt to parse the responses json.
 *
 * @example
 * import { safeFetchJson } from '@jvlk/fp-ts-fetch'
 *
 * safeFetchJson('api.com')() // => Either<Error, T>
 *
 * @since 1.1.0
 */
export function safeFetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): TaskEither<ServerError | JsonError, T> {
  return pipe(
    safeFetch(input, init),
    chainW((res) =>
      tryCatch<Error, T>(
        () => res.json(),
        (e) => Error(`failed to parse response JSON: ${e}`),
      ),
    ),
  )
}
