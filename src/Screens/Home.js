import React from 'react';
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/theme";
import { Content, Footer, Halfside, Container, Image, Shaker, InnerCont, BounceDiv, Space, Modal, ModalContainer, ModalHead, Divider, ModalButton, ModalText } from '../Components/Styled_Components/styles';
import skills from '../Assets/Skills.svg';



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
                    <Image src={skills} alt='Skill set' />
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