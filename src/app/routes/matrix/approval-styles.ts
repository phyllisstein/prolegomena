import styled, { css, keyframes } from 'styled-components'
import { Entry as EntryBase } from 'app/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Entry = styled(EntryBase)`
  width: min-content;
  pointer-events: none;

  &&& * {
    cursor: pointer;
    pointer-events: auto;
  }
`

export const Grid = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  perspective: 1000px;
`

export const Image = styled.img`
  width: 256px;
  height: auto;
`

export const Label = styled.div`
  ${ ({ theme }) => theme.typeface.millerDisplay({ fontSize: 11 }) }

  background-color: ${ ({ theme }) => theme.palette.css.gray100 };

  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;

  letter-spacing: 4px;
  font-weight: 600;

  font-variant-caps: all-small-caps;

  backface-visibility: hidden;
`

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: ${ ({ theme }) => theme.palette.css.gray800 };
  transform: translate(-50%, -50%);
  backface-visibility: hidden;

  &::before {
    content: '';
    display: block;

    ${ ({ $axis }) => {
    if ($axis === 'x') {
      return css`
          width: 1000vw;
          height: 5px;
        `
    }

    if ($axis === 'y') {
      return css`
          width: 5px;
          height: 1000vh;
        `
    }
  } }
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  60% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
`

export const PulsingIcon = styled(FontAwesomeIcon)`
  animation: ${ pulse } 2s ease-in-out infinite;
`
