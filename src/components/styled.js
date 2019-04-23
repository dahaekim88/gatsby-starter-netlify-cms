import styled, { css } from "styled-components"
import { Row, Col, Container, Label, Input } from "reactstrap"
import { Link } from "gatsby"
import {
  blue,
  white,
  darkwhite,
  darkgray,
  grayBorder,
  black,
  sizes,
} from "../constants"

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

export const BorderedContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem 0;
  border: 1px solid ${grayBorder};
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

export const Grid = styled.div`
  @media (min-width: 1200px) .container {
    width: 1170px;
  }
  @media (min-width: 992px) .container {
    width: 970px;
  }
  @media (min-width: 768px) .container {
    width: 750px;
  }
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
        default:
          return "0 3rem 3rem 0"
        // case 0:
        //   return "0 3rem 3rem 0"
        // default:
        //   return "0 0 3rem 0"
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

export const BorderedButton = styled.button`
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

export const HoveredButton = styled.button`
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
    height: 56rem;
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

export const ContentContainer = styled(Container)`
  margin: 8rem 0 12rem 0;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  padding: 5rem 0;
  border: 1px solid ${grayBorder};
  border-radius: 4px;
  width: 60%;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    width: 75%;
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    width: 90%;
  }
`

export const StyledLabel = styled(Label)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: normal;
`

export const StyledInput = styled(Input)`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 1rem 1.3rem;
`

export const StyledForm = styled.form`
  width: 50%;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    width: 80%;
  }
`

export const FormInput = styled.input`
  font-size: 1.3rem;
  font-weight: 300;
  display: block;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem 1.3rem;
  border: solid 1px #cccccc;
  border-radius: 4px;
  background-color: #ffffff;

  &:focus {
    border: 1px solid rgba(81, 203, 238, 1);
    box-shadow: 0 0 3px rgba(81, 203, 238, 1);
  }
`

export const FormButton = styled.button(
  props => css`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.3rem;
    color: ${props.color};
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem;
    overflow: hidden;
    user-select: none;
    background: ${props.background};
    text-align: center;

    &:hover {
      opacity: 0.8;
    }
  `
)

export const ButtonContainer = styled.div`
  margin-top: 5rem;
`

export const BorderLine = styled.div`
  display: inline-block;
  width: calc((100% - 45px) / 2);
  height: 1px;
  vertical-align: middle;
  background: rgba(52, 52, 52, 0.2);
`

export const Message = styled.p`
  color: #792a26;
  font-size: 1.2rem;
`

export const RedText = styled.p`
  color: #ff3a71;
`

export const ContentsBox = styled(Col)`
  background: ${white};
  border: solid 0.1rem ${grayBorder};
  border-radius: 0.5rem;
`

export const PagePart = styled(ContentsBox)`
  margin: 1rem 0;
`

export const SmallTitle = styled.p`
  margin-top: 3rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`

export const Paragraph = styled.p`
  margin-top: 3rem;
  font-size: 1.7rem;
  line-height: 2;
  text-align: center;
`

export const Emphasis = styled.p`
  display: inline;
  font-size: 2rem;
  color: #0077ff;
  font-weight: bold;
`

export const PageFooter = styled(Paragraph)`
  padding: 3rem 2rem 4rem 1rem;
`

export const FormQuestionLabel = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-weight: bold;
`

export const StyledSpan = styled.span`
  margin-left: 1rem;
  font-size: 1.2rem;
  color: darkBlue;

  &:hover {
    color: blue;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`

export const Modal = styled.div`
  height: 90%;
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;

  @media (max-width: 40rem) {
    width: 70%;
  }
`

export const PrivateTermsAndConditionsContainer = styled.div`
  height: 50%;
  width: 90%;
  padding-top: 2%;
  margin-bottom: 5%;
  overflow-y: scroll;
  border: 1px solid lightGrey;
`

export const RefundPolicyContainer = styled.div`
  height: 30%;
  width: 90%;
  overflow-y: scroll;
  border: 1px solid lightGrey;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TabContent = styled.div`
  padding-top: 2rem;
`

export const CarouselCard = styled.div`
  background: url(${({ image }) => image}) no-repeat center center fixed;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
