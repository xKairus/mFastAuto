import { useState, useEffect, useRef, RefObject } from "react"

export const useScrollAnimation = (ref: RefObject<HTMLElement>): boolean => {
  const [isAnimated, setIsAnimated] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true)
        } else if (!entry.isIntersecting && isAnimated) {
          setIsAnimated(false)
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px",
      threshold: 0.2,
    })

    observerRef.current.observe(ref.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [ref, isAnimated])

  return isAnimated
}
