import React from 'react';
import { useContext } from "react";
import { ThemeContext } from "../Context/theme";
import { Content, Footer, BounceDiv, Shaker, Space, Halfside, OnlyHor, Container, Card, CardHead, CardSub, CardText, FlexHor, InnerCont } from '../Components/Styled_Components/styles';
import SkillSet from '../Components/Skillset/SkillSet';
import pradosh from '../Assets/pradosh.png';
import sambit from '../Assets/sambit.png';
import rohit from '../Assets/rohit.png';
import Recom from '../Components/Recom/Recom';

const Exp = () => {
    const [{ isDark }] = useContext(ThemeContext);

    return (

        <Container Dark={isDark}>
            <InnerCont>
                <Halfside first>
                    <BounceDiv Dark={isDark}>
                        <Shaker>S</Shaker>
                        <Shaker>k</Shaker>
                        <Shaker>i</Shaker>
                        <Shaker>l</Shaker>
                        <Shaker>l</Shaker>
                        <Shaker>s</Shaker>
                        <Space />
                        <Shaker>&</Shaker>
                        <Space />
                        <Shaker>E</Shaker>
                        <Shaker>x</Shaker>
                        <Shaker>p</Shaker>
                        <Shaker>e</Shaker>
                        <Shaker>r</Shaker>
                        <Shaker>i</Shaker>
                        <Shaker>e</Shaker>
                        <Shaker>n</Shaker>
                        <Shaker>c</Shaker>
                        <Shaker>e</Shaker>
                    </BounceDiv>
                    <Content Dark={isDark}>SI started my Front-end developer journey post my successful placement in one of the top ten Indian Startups in 2020. I was excited about the start of my career as a React Native developer(Building mobile applications), got connected on LinkedIn with four interested people, and developed a project named “Schoolferry.”
                        <br /><br />
                        By the time I joined the corporate world, I had hands-on experience building mobile apps and was a part of two projects. One of them is the “SPRY,” which is currently used by “50+ Institutes and 15,000+ Athletes in the USA. Developed skills like creating custom components, using Redux, following Atomic structure, and publishing a private dependency.
                        <br /><br />
                        Since Oct 2021, I have been interested in developing web applications using React.js. So, I started developing projects in my free time after college and a part-time job as a Coding Instructor at Varsity Tutors. If interested, go through my GitHub located at Contact Section.
                    </Content>
                    <Footer Dark={isDark}>Never Stop Learning...</Footer>

                </Halfside>
                <Halfside>
                    <SkillSet />
                    <FlexHor>
                        <Card Dark={isDark}>
                            <CardHead Dark={isDark}>Part-time Coding Instructor</CardHead>
                            <CardSub Dark={isDark}>Varsity Tutors<br />NOV 2021-Present</CardSub>
                            <CardText Dark={isDark}>As a practice, I chose my part-time to be a tutor at Varsity tutors for different age groups from Teenage to real software developers and computer science grads seeking knowledge.
                                <br /><br />Areas of Teaching:
                                <br />• Programming languages like C, C++, Javascript, Typescript,
                                <br />• Markup languages like HTML, CSS,
                                <br />• React Native Framework and React Library.</CardText>
                        </Card>
                        <Card Dark={isDark}>
                            <CardHead Dark={isDark}>React Native Developer</CardHead>
                            <CardSub Dark={isDark}>Nineleaps<br />DEC 2020- JUL 2021</CardSub>
                            <CardText Dark={isDark}>Developed two big projects during my work and was appreciated with the "Feather on the Hat" award as one of the top developers at the organization during May.
                                <br /><br />Areas of Work:
                                <br />• React Native Framework
                                <br />• HTML,CSS, mark-up languages and JavaScript, TypeScript scripting languages
                                <br />• Redux, Atomic structure, JSON, Rest APIs Agile Scrum</CardText>
                        </Card>
                    </FlexHor>
                </Halfside>

            </InnerCont>
            <Halfside first>
                <BounceDiv Dark={isDark}>
                    <Shaker>R</Shaker>
                    <Shaker>e</Shaker>
                    <Shaker>c</Shaker>
                    <Shaker>o</Shaker>
                    <Shaker>m</Shaker>
                    <Shaker>m</Shaker>
                    <Shaker>e</Shaker>
                    <Shaker>n</Shaker>
                    <Shaker>d</Shaker>
                    <Shaker>a</Shaker>
                    <Shaker>t</Shaker>
                    <Shaker>i</Shaker>
                    <Shaker>o</Shaker>
                    <Shaker>n</Shaker>
                    <Shaker>s</Shaker>
                </BounceDiv>
            </Halfside>
            <OnlyHor>
                <Recom Dark={isDark} img={pradosh} back='img1' name='Pradosh H.S' job='Senior Project Manager' text='Vidya Sagar joined my team as an intern and quickly rose up to be a stellar developer for the team. He was a dedicated and a proactive member of the team who ensured that the feature that he had taken up was built as per the expectations. I wish him all the best for his future endeavours.' />
                <Recom Dark={isDark} img={sambit} back='img2' name='Sambit C' job='Project Manager' text='Vidya has worked with me as a Software Developer Intern for an Application Development Project. He was part of the Front-end development team and has made major contributions towards transforming the Idea into fully functional App.
Despite being a fresher and working in a strict time bound project he has showcased lot of maturity absorbing the learnings and working on the constructive feedbacks. Another positive trait is he always asks questions or at least put his PoV.
Wishing him good luck for all his future assignments.'/>
                <Recom Dark={isDark} img={rohit} back='img3' name='Rohit K' job='Software Development Engineer II' text='Vizia Vidya Sagar was new to the team and contributed significantly to the success of the project. Proactive, energetic, and a team player. Vizia is organized and customer-service oriented, has no problem working hard when necessary. Whenever the team had a problem, there has never been a time he has left us without a solution. The team could always depend on him and he helped deliver the project on time' />
            </OnlyHor>

        </Container>

    );
}

export default Exp;