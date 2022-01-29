import React, { useContext, useState } from 'react';
import { Container, BounceDiv, Shaker, Space, Content, Halfside, Input, FlexHor, FlexVer, TextArea, SubmitButton, InnerCont, IconCont,Errormessage, Successmessage, Hover } from '../Components/Styled_Components/styles';
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
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_oxd2csi', 'template_yjonk6m', e.target, 'user_lTr7lZUJOA3BHNPx3bjtK')
            .then(function(response){
                setSuccess("Your Message has been succesfully submitted to Vizia vidya sagar Kasina");
            }, (error) => {
                alert(error.message);
            });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setError('');
    };
    const validateForm = (e) => {
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (name != '' && message != '') {
                sendEmail(e);
                
            } else if(name == '' && message==''){
                setError('Please fill Name and Message fields');
                setSuccess('');
            }else if(name == ''){
                setError('Please fill Name field');
                setSuccess('');
            }
            else if(message == ''){
                setError('Please fill Message field');
                setSuccess('');
            }
        } else {
            setError('Please enter correct Email address');
            
        }
        setSuccess('');
    }

    return (
        <Container Dark={isDark}>
            <InnerCont>
                <Halfside First >
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
                    <form onSubmit={(e)=>validateForm(e)}>
                        <FlexHor>
                            <Input type={'text'} name='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='* Name' />
                            <Input type={'email'} name='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='* Email' />
                        </FlexHor>
                        <FlexVer>
                            <Input type={'text'} name='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
                            <TextArea type={'text'} rows={5} name='Message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='* Message' />
                            <Errormessage>{error}</Errormessage>
                            <SubmitButton type='submit' >Send</SubmitButton>
                            <Successmessage>{success}</Successmessage>
                        </FlexVer>
                    </form>
                    <IconCont>
                        <Hover><BsLinkedin onClick={() => { window.open('https://www.linkedin.com/in/vizia-vidyasagar-kasina/'); }} size='2em' color='#0077b5' /></Hover>
                        <Hover><BsGithub onClick={() => { window.open('https://github.com/vijay13sagar/'); }} size='2em' color='black' /></Hover>
                        <Hover><BsYoutube onClick={() => { window.open('https://www.youtube.com/channel/UCgT3Z4CF9gx9cRDuxfx1k8w'); }} size='2em' color='#FF0000' /></Hover>
                        <Hover><SiGmail onClick={() => { window.open('mailto:vijay13vidyasagar@gmail.com'); }} size='2em' color='#FF0000' /></Hover>
                    </IconCont>
                </Halfside>
            </InnerCont>
        </Container>
    );
}
export default Contact;