import React from 'react';
import { Box, Form, FormField, Button } from 'grommet';
import { Add, Info } from 'grommet-icons';
import SVG from '../../components/svg/index';
import {
  Layout,
  TitleText,
  InfoText,
  LegalText,
  TextContainer,
  CircleAnchor,
  Input,
  InputCard,
  SubmitButton,
} from './style';

const svgNames = ['Eye', 'Swords', 'Bird', 'Heart', 'Anchor'];
const svgNamesHover = [
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
  return (
    /*     <Layout background="#1F2532">
      <TextContainer align="center" alignSelf="center">
        <TitleText>You need more metal in</TitleText>
        <TitleText>your life!</TitleText>
        <InfoText margin={{ top: '1%' }}>
          Just push the button to let the metal rain down!
        </InfoText>
      </TextContainer>
      {svgNamesHover.map((name, index) => (
        <SVG key={index} name={name} />
      ))}
      <SVG name="Button-Accent" />
      <CircleAnchor onClick={() => console.log('You clicked me!')} />
    </Layout> */
    <Box style={{overflowx: 'hidden'}}>
    <Layout background="#1F2532">
      <TextContainer align="center" alignSelf="center">
        <TitleText>Time to start jamming!</TitleText>
        <InfoText margin={{ top: '1%' }}>
          Let's get you signed up. Sign up is easy! Just name, email,
        </InfoText>
        <InfoText>
          credit card, and done! We'll handle the rest. Let's make some
        </InfoText>
        <InfoText>music together.</InfoText>
        <Box
          margin={{ top: 'large' }}
          background="white"
          width="50%"
          style={{
            borderRadius: '5%',
          }}
          direction="column"
          pad={{ top: 'large', left: 'xlarge', right: 'xlarge', bottom: 'large' }}
        >
          <Form>
            <FormField htmlFor="name">
              <Input id="name" placeholder="Band Name" />
            </FormField>
            <FormField htmlFor="email">
              <Input id="email" placeholder="Email Address" />
            </FormField>
            <Box gap="small" direction="row-responsive">
              <Box width="xlarge">
                <FormField htmlFor="credit-card">
                  <Input id="credit-card" placeholder="Credit Card Number" />
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
            <Box align="center" pad="medium" width="100%">
              <SubmitButton
                color="#7D4CDB"
                primary
                label="Let's Rock"
                type="submit"
              />
            </Box>
          </Form>
          <LegalText>
            Upon mashing the submit button your credit card with be charged 10¢
            an hour by Hewlett Packard Financial Services and you will receive
            your very own physical server for the maximum amount of metal on HPE
            Servers! Speed drumming here we come! If you need to read it, we got
            all the lawyer stuff that protects the artist and the venue
          </LegalText>
        </Box>
      </TextContainer>
      {svgNamesHover.map((name, index) => (
        <SVG key={index} name={name} />
      ))}
    </Layout>
    </Box>
  );
};

export default Signup;
