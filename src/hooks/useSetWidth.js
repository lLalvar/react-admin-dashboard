import { useContext, useEffect, useState } from 'react'
import { SidebarCtx } from '../context/SidebarContext'
import { useCurrentWidth } from './useCurrentWidth'

export function useSetWidth(widthValue) {
  const currentWidth = useCurrentWidth()
  const [width, setWidth] = useState(currentWidth)
  const { isSidebarOpen } = useContext(SidebarCtx)
  let timeoutId
  const resizeListener = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (isSidebarOpen) {
        return setWidth(`${currentWidth - 292}px`)
      } else {
        return setWidth(`${currentWidth - 92}px`)
      }
    }, 320)
  }

  useEffect(() => {
    resizeListener()
  }, [currentWidth, isSidebarOpen])

  if (typeof width === 'string') {
    return width
  } else undefined
}
