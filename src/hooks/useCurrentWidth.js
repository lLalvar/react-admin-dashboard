import { useState, useEffect, useContext } from 'react'

export function useCurrentWidth() {
  let [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timeoutId

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 50)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}
