import React, { useState } from 'react';
import { Box, Form, FormField, Button } from 'grommet';
import { Close } from 'grommet-icons';
import SVG from '../../components/svg/index';
import {
  Layout,
  TitleText,
  InfoText,
  LegalText,
  TextContainer,
  Input,
  InputCard,
  FormWrapper,
  AddButton,
  AddIcon,
  SignupWrapper,
} from './style';

const svg = [
  'Eye',
  'Swords',
  'Bird',
  'Heart',
  'Anchor',
  'Flower',
  'Skull-Yellow',
  'Lightning-Purple',
  'Guitar-Green',
  'Skull-Blue',
  'Lightning-Blue',
  'Skull-Red',
  'Lightning-Green',
  'Guitar-Purple',
];

const Signup = () => {
  const [hover, setHover] = useState('');
  const [modal, setModal] = useState(false);

  const mouseLeave = () => {
    modal ? setHover('Enter') : setHover('Leave');
  };

  const mouseEnter = () => {
    setHover('Enter');
  };

  const openModal = () => {
    setModal(true);
    setHover('Enter');
  };

  const closeModal = () => {
    setModal(false);
    setHover('Leave');
  };

  return (
    <SignupWrapper>
      <Layout background="#1F2532" pad={{ top: 'large' }} alignSelf="center">
        <TextContainer margin={{ top: 'xlarge' }} fill="horizontal">
          {modal ? (
            <Box>
              <TitleText>Time to start jamming!</TitleText>
              <InfoText margin={{ top: 'small' }}>
                Let's get you signed up. Sign up is easy! Just name, email,
              </InfoText>
              <InfoText>
                credit card, and done! We'll handle the rest. Let's make some
              </InfoText>
              <InfoText>music together.</InfoText>
            </Box>
          ) : (
            <Box>
              <TitleText>You need more metal in</TitleText>
              <TitleText>your life!</TitleText>
              <InfoText margin={{ top: 'small' }}>
                Just push the button to let the metal rain down!
              </InfoText>
            </Box>
          )}

          {modal && (
            <FormWrapper
              className="form-wrapper"
              background="#ffffff"
              direction="column"
              pad="large"
            >
              <Button
                alignSelf="end"
                plain
                icon={<Close />}
                onClick={closeModal}
              />
              <Box pad={{ left: 'medium', right: 'medium', top: 'small' }}>
                <Form>
                  <FormField htmlFor="name">
                    <Input id="name" placeholder="Band Name" />
                  </FormField>
                  <FormField htmlFor="email">
                    <Input id="email" placeholder="Email Address" />
                  </FormField>
                  <Box gap="small" direction="row-responsive">
                    <Box width="large">
                      <FormField htmlFor="credit-card">
                        <Input
                          id="credit-card"
                          placeholder="Credit Card Number"
                        />
                      </FormField>
                    </Box>
                    <Box gap="small" direction="row">
                      <Box width="small">
                        <FormField htmlFor="month">
                          <InputCard id="month" placeholder="MM" />
                        </FormField>
                      </Box>
                      <Box width="small">
                        <FormField htmlFor="year">
                          <InputCard id="year" placeholder="YY" />
                        </FormField>
                      </Box>
                      <Box width="small">
                        <FormField htmlFor="cvc">
                          <InputCard id="cvc" placeholder="CVC" />
                        </FormField>
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    margin="medium"
                    primary
                    color="#9060EB"
                    alignSelf="center"
                    type="submit"
                    label="Let's Rock!"
                  />
                </Form>
              </Box>
              <LegalText>
                Upon mashing the submit button your credit card with be charged
                10¢ an hour by Hewlett Packard Financial Services and you will
                receive your very own physical server for the maximum amount of
                metal on HPE Servers! Speed drumming here we come! If you need
                to read it, we got all the lawyer stuff that protects the artist
                and the venue.
              </LegalText>
            </FormWrapper>
          )}
        </TextContainer>
        <AddButton
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onClick={openModal}
          className="add-button"
          primary
          icon={<AddIcon size="medium" color="#ffffff" />}
        />
        {svg.map((name, index) => (
          <SVG key={index} name={name} hover={hover} />
        ))}
        <SVG name="Button-Accent" />
      </Layout>
    </SignupWrapper>
  );
};

export default Signup;
