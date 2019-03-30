import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { blue, white, darkwhite, darkgray, black, sizes } from "../../constants"

export const Background = styled.div`
  padding: 5rem 0;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: 5rem 0;
  }
`

export const DarkBackground = styled.div`
  background: ${darkwhite};
  padding: 5rem 0;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: 5rem 0;
  }
`

export const Title = styled.div`
  font-family: Lovelo;
  font-size: ${({ size }) => size};
  text-align: center;
  font-weight: bold;
`

export const SubTitle = styled.div`
  margin-top: 1.5rem;
  font-size: ${({ size }) => size};
  text-align: center;
  margin-bottom: 4rem;
`

export const SubStrongTitle = styled.span`
  margin-top: 1.5rem;
  font-size: ${({ size }) => size};
  text-align: center;
  font-family: Lovelo;
`

export const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    flex-direction: column;
  }
`

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 2rem 0;
  }
`

export const StyledCol = styled(Col)`
  padding: ${({ "data-index-number": index }) => {
    switch (index % 3) {
      case 0:
        return "3rem 3rem 0 0"
      case 1:
        return "3rem 1.5rem 0 1.5rem"
      case 2:
        return "3rem 0 0 3rem"
      default:
        return ""
    }
  }};

  @media screen and (max-width: ${sizes.b_desktop}px) {
    padding: ${({ "data-index-number": index }) => {
      switch (index % 3) {
        case 0:
          return "3rem 2rem 0 0"
        case 1:
          return "3rem 1rem 0 1rem"
        case 2:
          return "3rem 0 0 2rem"
        default:
          return ""
      }
    }};
  }

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: ${({ "data-index-number": index }) => {
      switch (index % 2) {
        case 0:
          return "0 3rem 3rem 0"
        default:
          return "0 0 3rem 0"
      }
    }};
  }

  @media screen and (max-width: ${sizes.b_tablet}px) {
    padding: ${({ "data-index-number": index }) => {
      switch (index) {
        default:
          return "0 4rem 3rem 4rem"
      }
    }};
  }
`

export const BorderedButton = styled.a`
  height: 4rem;
  width: 11rem;
  background-color: white;
  border: 2px solid ${black};
  border-radius: 4px;
  background-color: ${white};
  font-size: 1.5rem;
  position: absolute;
  bottom: 20%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HoveredButton = styled.a`
  display: inline-block;
  width: ${({ width }) => width};
  padding: 1.2rem 0;
  border: solid 0.2rem ${white};
  border-radius: 0.5rem;
  font-size: ${({ size }) => size};
  font-weight: 300;
  text-align: center;
  background: rgba(0, 0, 0, 0.59);
  color: ${white};
  cursor: pointer;

  &:visited,
  &:focus,
  &:hover,
  .selected {
    text-decoration: none;
    color: ${white};
  }

  &:hover,
  .selected {
    background: ${blue};
    border-color: ${blue};
  }
`

export const StyledLink = styled(Link)`
  color: ${({ color }) => color};
  text-decoration: none;

  &:visited,
  &:focus,
  &:hover,
  .selected {
    color: ${({ color }) => color};
    text-decoration: none;
  }
`

export const CardContainer = styled.div`
    height: 53rem;
    box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.2);}
    border-radius: 6px;
    color: black;
    background: ${white};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: solid 0.2rem ${({ highlighted }) =>
      highlighted ? darkgray : "rgba(0, 0, 0, 0)"};
    border-radius: 0.6rem;
  `

export const MarginBottomContainer = styled.div`
  margin-bottom: 2rem;
  font-size: 1.4rem;
`
