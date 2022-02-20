import styled from 'styled-components';
import { MdArrowDownward, MdArrowForward, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 25px;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3.2em;
  text-align: center;
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  max-width: 600px;
`

export const HeroBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowDownward = styled(MdArrowDownward)`
  font-size: 20px;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 20px;
`
