import styled, { keyframes } from "styled-components";
import * as palette from "./Variables.js";

export const moveRight = keyframes`
     from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
`;
export const trail = keyframes`
     from {
         opacity: 0;
    transform:scale3d(0.1,0.2,0);
    margin-left: 100%;
  }
  to {
    opacity: 1;
    transform:scale3d(1,1,1);
    margin-left: 0%;
  }
`;
export const shake = keyframes`
0%{
    transform:scale3d(1.2,1,1);
    
  }
  50% {
    transform:scale3d(0.8,1.4,1) translateY(-10px);
    margin-right:3px;
    margin-left:3px;
  }
  100% {
    transform:scale3d(1.2,1,1);
  }
`;
export const bounce = keyframes`
0%{
    transform:translateY(0px);  
  }
  50% {
    transform:translateY(-20px); 
  }
  100% {
    transform:translateY(0px); 
  }
`;
export const back = keyframes`
    0%{
        background-color: white;
        transform: scale3d(1,1,1);
    }
    100%{
        background-color: blue;
        transform: scale3d(0.5,0.5,1);
    }
`;

export const Header = styled.h1`
  font-family: "Alice", serif;
  font-weight: 400;
  font-size: ${palette.large};
  margin: 0 0 0 0;
  color: ${(props) => (props.Dark ? palette.DarkHeadText : palette.HeadText)};
  margin-bottom: 5vh;
`;
export const Shaker = styled.span`
  font-family: "Alice", serif;
  font-weight: 900;
  font-size: ${palette.large};
  margin: 0 0 0 0;
  width: fit-content;
  margin-top: 5vh;
  margin-bottom: 5vh;
  &:hover {
    animation-name: ${shake};
    animation-duration: 0.8s;
    animation-iteration-count: 1;
  }
`;
export const BounceDiv = styled.div`
  position: relative;
  display: flex;
  color: ${(props) => (props.Dark ? palette.DarkHeadText : palette.HeadText)};
  margin: 0;
`;
export const Space = styled.p`
  margin-right: 5px;
`;
export const Footer = styled.h4`
  font-family: "Alice", serif;
  font-weight: 400;
  font-size: ${palette.medium};
  margin: 0 0 0 0;
  color: ${(props) => (props.Dark ? palette.DarkHeadText : palette.HeadText)};
  margin-top: 3vh;
`;
export const Content = styled.p`
  font-family: "calibri";
  font-weight: 400;
  font-size: ${palette.medium};
  margin: 0 0 0 0;
  color: ${(props) => (props.Dark ? palette.DarkText : palette.Text)};
`;
export const Errormessage = styled.p`
  font-family: "calibri";
  font-weight: 300;
  font-size: ${palette.medium};
  margin: 0 0 0 0;
  color: red;
`;
export const Successmessage = styled.p`
  font-family: "calibri";
  font-weight: 300;
  font-size: ${palette.medium};
  margin-top: 0.5em;
  color: green;
`;
export const SkillCont = styled.div`
  width: 50vw;
  margin: 0;
  @media (max-width: 1168px) {
    width: 90vw;
  }
`;
export const Container = styled.div`
  width: 100%;
  min-height: 92vh;
  margin: 0;
  padding: 0;

  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => (props.Dark ? palette.DarkBg : palette.Bg)};
  word-wrap: break-word;
`;
export const InnerCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: 1168px) {
    flex-direction: column;
  }
`;

export const Halfside = styled.div`
  width: 50%;
  margin: 5vh 5vh 0;
  height: ${(props) => (props.Height ? props.Height : "auto")}vh;
  padding: 0;
  display: block;
  justify-content: ${(props) => (props.Hor ? "space-between" : "flex-start")};
  align-items: center;
  contain: content;
  word-wrap: break-word;
  /* background-color: red; */
  position: relative;
  @media (max-width: 1168px) {
    width: auto;
    margin-top: ${(props) => (props.First ? 12 : 5)}vh;
  }
`;
export const Image = styled.img`
  width: auto;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* border-radius: 5%; */
  @media (max-width: 1168px) {
    width: 100%;
    height: auto;
  }
`;
export const Card = styled.div`
  width: 45%;
  height: auto;
  margin: 1vh 1vw 1vh;
  border-color: ${(props) => (props.Dark ? palette.NavDarkBg : palette.NavBg)};
  border-radius: 1em;
  background-color: ${(props) =>
    props.Dark ? palette.NavDarkBg : palette.NavBg};
  display: grid;
  justify-content: flex-start;
  align-items: center;
  contain: content;
  padding: 1em;
  box-shadow: 0px 0px 10px
    ${(props) => (props.Dark ? palette.Text : palette.NavDarkBg)};
  &:hover {
    transform: scale3d(1.01, 1.025, 1);
    box-shadow: 0px 0px 15px
      ${(props) => (props.Dark ? palette.Text : palette.NavDarkBg)};
  }
  @media (max-width: 768px) {
    margin-top: 1vh;
    width: 85%;
  }
`;
export const CardHead = styled.h2`
  color: ${(props) => (props.Dark ? palette.DarkHeadText : palette.HeadText)};
  font-size: ${palette.medium};
  font-weight: ${palette.regular};
  font-family: "Alice", serif;
  margin: 0;
`;
export const CardSub = styled.p`
  color: ${(props) => (props.Dark ? palette.DarkText : palette.Text)};
  font-size: ${palette.small};
  font-weight: ${palette.thin};
  font-family: "calibri";
  display: flex;
  align-items: center;
`;
export const CardText = styled.p`
  color: ${(props) => (props.Dark ? palette.DarkText : palette.Text)};
  font-size: ${palette.medium};
  font-weight: ${palette.regular};
  font-family: "calibri";
  margin: 0;
`;
export const ProgressBar = styled.div`
  background-color: ${palette.NavBg};
  height: 0.9em;
  width: 100%;
  border-radius: 1em;
  margin: 0;
`;
export const ProgressPercent = styled.div`
  background-color: ${(props) => props.color};
  height: ${(props) => (props.height ? props.height : 0.9)}em;
  width: ${(props) => props.percent}%;
  position: ${(props) => (props.Button ? "absolute" : "static")};
  border-radius: 1em;
  animation-name: ${(props) => (props.Button ? "" : moveRight)};
  animation-duration: 2s;
  animation-iteration-count: 1;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  color: white;
  &:hover {
    transform: translateX(${(props) => (props.Dark ? "-2px" : "2px")});
    transition: all 0.2s ease-in;
  }
`;
export const FlexHor = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  margin-top: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const OnlyHor = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const IconCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  width: 100%;
`;
export const FlexVer = styled.div`
  display: grid;
  align-content: space-between;
  width: 100%;
`;
export const ToggleBut = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.Dark ? "flex-end" : "flex-start")};
  /* justify-content: space-between; */
  position: relative;
  background-color: ${palette.Text};
  width: 3em;
  height: 1.5em;
  border-radius: 1.5em;
  margin: 0;
  padding: 0;
`;
export const A = styled.a`
  margin-top: 10px;
  &:hover {
    transform: scale3d(1.2, 1.2, 1);
    transition: ease-in-out 0.4s;
  }
`;
export const NavBar = styled.nav`
  height: 8vh;
  width: 100%;
  background-color: ${(props) =>
    props.Dark ? palette.NavDarkBg : palette.NavBg};
  display: grid;
  align-items: center;
  contain: content;
  @media (max-height: 540px) {
    height: 60px;
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5vw;
`;
export const NavItem = styled.div`
  font-family: "Alice", serif;
  font-size: ${palette.large};
  color: ${(props) => (props.Dark ? palette.NavDarkText : palette.NavText)};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale3d(1.2, 1.2, 1.5);
  }
`;
export const MyName = styled.a`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: ${palette.large};
  color: ${(props) => (props.Dark ? palette.NavDarkText : palette.NavText)};
`;
export const SurName = styled.a`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: ${palette.large};
  color: ${(props) =>
    props.Dark ? palette.NavDarkTextBold : palette.NavTextBold};
  font-weight: ${palette.bold};
`;
export const Input = styled.input`
  font-family: "Alice", serif;
  font-size: ${palette.small};
  background-color: ${(props) =>
    props.Dark ? palette.NavDarkBg : palette.NavBg};
  width: 100%;
  color: ${(props) => (props.Dark ? palette.NavDarkText : palette.NavText)};
  height: ${(props) => (props.Hei ? props.Hei : 3)}em;
  border: 0.25vw outset lightgray;
  border-radius: 0.25vw;
  box-sizing: border-box;
  padding: 5px;
  margin: 0.5vw 0 0.5vw;
  transition: border 1s linear;
  &:hover {
    border-bottom: 0.25vw outset #80f905;
  }
`;
export const Overflow = styled.div`
  overflow: hidden;
`;
export const SubmitButton = styled.button`
  width: auto;
  height: 2em;
  font-size: ${palette.medium};
  color: ${palette.DarkText};
  font-family: "Alice", serif;
  background-color: ${palette.HeadText};
  padding: 5px;
  margin: 0.5vw 0 0.5vw;
  border: none;
  border-radius: 0.5vw;
  &:hover {
    transform: translate(0px, 2px);
    background-color: #0094ff;
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
`;
export const Modal = styled.div`
  width: 40%;
  height: auto;
  border-radius: 2vw;
  border-style: solid;
  border-color: ${palette.NavDarkBg};
  border-width: 1px;
  background-image: url("https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png");
  display: grid;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    width: 60%;
  }
`;
export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(105, 105, 105, 0.8);
`;
export const Divider = styled.div`
  background-color: ${palette.NavDarkTextBold};
  height: 1px;
  width: 80%;
  margin: 5% 0% 5%;
`;
export const ModalButton = styled.button`
  width: 30%;
  background-color: ${palette.NavBg};
  color: black;
  border-radius: 30px;
  border-color: ${palette.NavText};
  margin-bottom: 2%;
`;
export const ModalHead = styled.h1`
  color: whitesmoke;
  font-size: ${palette.large};
  font-weight: ${palette.regular};
  font-family: "Alice", serif;
  margin-top: 3%;
  margin-bottom: 0;
`;
export const ModalText = styled.p`
  color: white;
  font-size: ${palette.medium};
  font-weight: ${palette.regular};
  font-family: "calibri";
  margin: 0px 5% 5%;
`;

export const Hover = styled.div`
  &:hover {
    transform: scale3d(1.2, 1.2, 1);
    transition: ease-in-out 0.5s;
  }
`;
export const IconCard = styled.div`
  background-color: white;
  width: 5vw;
  height: 5vw;
  border-radius: 5vw;
  box-shadow: 0px 0px 5px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 3s infinite;
  animation-delay: ${(props) => (props.Delay ? props.Delay : 0)}s;
  position: absolute;
  top: ${(props) => (props.Top ? props.Top : 0)}%;
  right: ${(props) => (props.Right ? props.Right : 0)}%;
  &:hover {
    animation: ${back} 1s linear 1;
  }
  @media (max-width: 1168px) {
    top: ${(props) => (props.Top ? props.Top : 0)}%;
  }
  @media (max-width: 940px) {
    top: ${(props) => (props.Top ? props.Top / 1.3 : 0)}%;
  }
  @media (max-width: 750px) {
    top: ${(props) => (props.Top ? props.Top / 2 : 0)}%;
  }
  @media (max-width: 490px) {
    top: ${(props) => (props.Top ? props.Top / 3 : 0)}%;
  }
`;

export const Iconimg = styled.img`
  height: 80%;
`;
