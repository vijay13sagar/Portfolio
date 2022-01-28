import React, { useContext, useState } from 'react';
import { Container, A, BounceDiv, Shaker, Space, Content, Halfside, Input, FlexHor, FlexVer, TextArea, SubmitButton, OnlyHor, InnerCont } from '../Components/Styled_Components/styles';
import { ThemeContext } from "../Context/theme";
import emailjs from 'emailjs-com';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


const Contact = () => {
    const [{ isDark }] = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oxd2csi', 'template_yjonk6m', e.target, 'user_lTr7lZUJOA3BHNPx3bjtK')
            .then((result) => {
                alert("Your Message has been succesfully submitted to Vizia vidya sagar Kasina");
            }, (error) => {
                alert(error.message);
            });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    const validateForm = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (name != '' && message != '') {
                sendEmail();
            } else {
                alert('Please enter your Name and Message');
            }
        } else {
            alert('Please enter correct Email address');
        }

    }

    return (
        <Container Dark={isDark}>
            <InnerCont>
                <Halfside>
                    <BounceDiv Dark={isDark}>
                        <Shaker>C</Shaker>
                        <Shaker>o</Shaker>
                        <Shaker>n</Shaker>
                        <Shaker>t</Shaker>
                        <Shaker>a</Shaker>
                        <Shaker>c</Shaker>
                        <Shaker>t</Shaker>
                        <Space />
                        <Shaker>M</Shaker>
                        <Shaker>e</Shaker>
                    </BounceDiv>
                    <Content Dark={isDark}>I’m interested in Full-time and freelance job opportunities, especially ambitious or enormous projects. However, if you have other requests or questions, don’t hesitate to use the form.</Content>
                    <form onSubmit={validateForm}>
                        <FlexHor>
                            <Input type={'text'} name='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='* Name' />
                            <Input type={'email'} name='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='* Email' />
                        </FlexHor>
                        <FlexVer>
                            <Input type={'text'} name='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
                            <TextArea type={'text'} rows={5} name='Message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='* Message' />
                            <SubmitButton type='submit' >Send</SubmitButton>
                        </FlexVer>
                    </form>
                    <OnlyHor>
                        <A href="https://www.linkedin.com/in/vizia-vidyasagar-kasina/" target="_blank"><BsLinkedin size='2em' color='#0077b5' /></A>
                        <A href="https://github.com/vijay13sagar/" target="_blank"><BsGithub size='2em' color='black' /></A>
                        <A href="https://www.youtube.com/channel/UCgT3Z4CF9gx9cRDuxfx1k8w" target="_blank"><BsYoutube size='2em' color='#FF0000' /></A>
                        <A href="mailto:vijay13vidyasagar@gmail.com" target="_blank"><SiGmail size='2em' color='#FF0000' /></A>
                    </OnlyHor>
                </Halfside>
            </InnerCont>
        </Container>
    );
}
export default Contact;