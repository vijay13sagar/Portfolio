import React from 'react';
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/theme";
import { Content, Footer, Halfside, Container, Image, Shaker, InnerCont, BounceDiv, Space, Modal, ModalContainer, ModalHead, Divider, ModalButton, ModalText, IconCard, Iconimg } from '../Components/Styled_Components/styles';
import css from '../Assets/css.png';
import firebase from '../Assets/firebase.png';
import git from '../Assets/git.png';
import github from '../Assets/github.png';
import html from '../Assets/html.png';
import javascr from '../Assets/javascr.png';
import Linux from '../Assets/Linux.png';
import node from '../Assets/node.png';
import npm from '../Assets/npm.png';
import react from '../Assets/react.png';
import redux from '../Assets/redux.png';
import sass from '../Assets/sass.png';
import typescri from '../Assets/typescri.png';
import vs from '../Assets/vs.png';



const Home = () => {
    const [{ isDark }] = useContext(ThemeContext);

    const [show, setShow] = useState();
    useEffect(() => {
        setShow(localStorage.getItem("show") === 'null');
    }, [])
    const closeModal = () => {
        localStorage.setItem('show', false);
        setShow(false);
    }
    return (
        <Container Dark={isDark}>

            {!show ? <InnerCont><Halfside First>
                <BounceDiv Dark={isDark}>
                    <Shaker>M</Shaker>
                    <Shaker>e</Shaker>
                    <Space />
                    <Shaker>&</Shaker>
                    <Space />
                    <Shaker>M</Shaker>
                    <Shaker>y</Shaker>
                    <Shaker>s</Shaker>
                    <Shaker>e</Shaker>
                    <Shaker>l</Shaker>
                    <Shaker>f</Shaker>
                </BounceDiv>
                <Content Dark={isDark}>I'm a very energetic and self-motivated Front-end Developer located in Ontario, Canada. I love to work in any environment as it helps me gain more knowledge and experience.
                    <br /><br /> Apart from academics, I always find myself with positive thinking. My Objective is: To enhance my knowledge and skills by working in a dynamic and stable workplace that provides job satisfaction and self-development while contributing to the organization's success.
                    <br /><br />My dream is to grow along with the organization by using my knowledge to develop the organization. Interested in the entire Front-end spectrum and working on ambitious projects with positive people.
                </Content>
                <Footer Dark={isDark}>Let's Build...</Footer>
            </Halfside>
                <Halfside Height={70}>
                    <IconCard Top={15} Right={35}><Iconimg src={css}/></IconCard>
                    <IconCard Delay={0.2} Top={80} Right={30}><Iconimg src={firebase}/></IconCard>
                    <IconCard Delay={0.4} Top={50} Right={20}><Iconimg src={git}/></IconCard>
                    <IconCard Delay={0.6} Top={30} Right={45}><Iconimg src={github}/></IconCard>
                    <IconCard Delay={0.8} Top={45} Right={80}><Iconimg src={html}/></IconCard>
                    <IconCard Delay={1} Top={60} Right={60}><Iconimg src={javascr}/></IconCard>
                    <IconCard Delay={1.2} Top={5} Right={60}><Iconimg src={Linux}/></IconCard>
                    <IconCard Delay={1.4} Top={70} Right={45}><Iconimg src={node}/></IconCard>
                    <IconCard Delay={1.6} Top={75} Right={80}><Iconimg src={npm}/></IconCard>
                    <IconCard Delay={2} Top={50} Right={50}><Iconimg src={react}/></IconCard>
                    <IconCard Delay={0.3} Top={25} Right={15}><Iconimg src={redux}/></IconCard>
                    <IconCard Delay={0.5} Top={30} Right={70}><Iconimg src={sass}/></IconCard>
                    <IconCard Delay={0.7} Top={80} Right={10}><Iconimg src={typescri}/></IconCard>
                    <IconCard Delay={0.9} Top={10} Right={80}><Iconimg src={vs}/></IconCard>
                    {/* <Image src={dp} alt='Skill set' /> */}
                    {/* <Logo/> */}
                </Halfside>
            </InnerCont> :
                <ModalContainer>
                    <Modal>
                        <ModalHead>NOTE{show}</ModalHead>
                        <Divider />
                        <ModalText>Hi, I developed this website without using any third-party plugins/dependencies. The dependencies I installed are React-router-dom, Styled-components, and React-icons. Happy reading my portfolio.</ModalText>
                        <ModalButton onClick={closeModal}>Close</ModalButton>
                    </Modal>
                </ModalContainer>}


        </Container>
    );
}

export default Home;