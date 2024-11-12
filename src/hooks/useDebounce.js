import { useEffect } from "react"
import { useTimeout } from "./index"

export function useDebounce(callback, delay, dependencies) {
   const { reset, clear } = useTimeout(callback, delay)
   useEffect(reset, [...dependencies, reset])
   useEffect(clear, [])// eslint-disable-line
}