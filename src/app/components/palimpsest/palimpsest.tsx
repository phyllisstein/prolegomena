import {
  ReactChild,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { animated, useSpring } from 'react-spring'

interface Props {
  children: ReactChild
}

export function Palimpsest ({ children }: Props): ReactElement {
  const container = useRef<HTMLDivElement>()
  const [containerDimensions, setContainerDimensions] = useState({
    lineHeight: 0,
    width: 0,
  })

  useEffect(() => {
    if (container.current == null) return

    const { width } = container.current.getBoundingClientRect()
    const lineHeight = Number.parseFloat(
      window.getComputedStyle(container.current).lineHeight,
    )

    setContainerDimensions({ lineHeight, width })
  }, [container])

  const [offset, setOffset] = useState({ left: 0, top: 0 })
  const clampOffset = useCallback(
    (nextOffset: number) => {
      const left = offset.left + nextOffset

      if (left >= containerDimensions.width) {
        const top = offset.top + containerDimensions.lineHeight
        setOffset({
          left: 0,
          top,
        })
        return
      }

      if (left <= 0) {
        const top = offset.top - containerDimensions.lineHeight
        setOffset({
          left: containerDimensions.width,
          top,
        })
        return
      }

      setOffset(current => ({
        ...current,
        left,
      }))
    },
    [containerDimensions, offset],
  )

  const { left, top } = useSpring({
    left: offset.left,
    top: offset.top,
  })

  return (
    <div>
      <button onClick={ () => clampOffset(-100) }>←</button>
      <button onClick={ () => clampOffset(100) }>→</button>
      <animated.div
        ref={ container }
        style={{ position: 'relative', fontSize: '18px', paddingTop: top }}>
        <animated.span style={{ marginLeft: left }}>The</animated.span>{ ' ' }
        <animated.span>
          presence that rose thus so strangely beside the waters, is expressive
          of what in the ways of a thousand years men had come to desire. Hers
          is the head upon which all “the ends of the world are come,” and the
          eyelids are a little weary. It is a beauty wrought out from within
          upon the flesh, the deposit, little cell by cell of strange thoughts
          and fantastic reveries and exquisite passions. Set it for a moment
          beside one of those white Greek goddesses or beautiful women of
          antiquity, and how would they be troubled by this beauty, into which
          the soul with all its maladies has passed! All the thoughts and
          experience of the world have etched and moulded there, in that which
          they have the power to refine and make expressive of the outward form,
          the animalism of Greece, the lust of Rome, the mysticism of the middle
          age with its spiritual ambition and imaginative loves, the return of
          the Pagan world, the sins of the Borgias.
        </animated.span>
      </animated.div>
    </div>
  )
}
