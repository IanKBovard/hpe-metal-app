import React from 'react';
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
    /*  <Layout fill background="#1F2532" pad={{ top: 'xlarge' }}>
      <TextContainer margin={{ top: 'xlarge' }} fill="horizontal">
        <TitleText>You need more metal in</TitleText>
        <TitleText>your life!</TitleText>
        <InfoText margin={{ top: 'small' }}>
          Just push the button to let the metal rain down!
        </InfoText>
      </TextContainer>
      {svgNamesHover.map((name, index) => (
        <SVG key={index} name={name} />
      ))}
      <SVG name="Button-Accent" />
      <AddButton primary icon={ <AddIcon size="medium" color="#ffffff"/>}/>
    </Layout> */
    <Layout background="#1F2532">
      <TextContainer margin={{ top: 'xlarge' }}>
        <TitleText>Time to start jamming!</TitleText>
        <InfoText margin={{ top: 'small' }}>
          Let's get you signed up. Sign up is easy! Just name, email,
        </InfoText>
        <InfoText>
          credit card, and done! We'll handle the rest. Let's make some 
        </InfoText>
        <InfoText>music together.</InfoText>
        <FormWrapper
          background="#ffffff"
          direction="column"
          pad="large"
        >
          <Button
            alignSelf="end"
            plain
            icon={<Close />}
          />
          <Box pad={{left: 'medium', right: 'medium', top: 'small'}}>

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
          <Button disabled="true" margin="medium" primary alignSelf="center" type="submit" color="brand" label="Let's Rock!" />
          </Form>
          </Box>
          <LegalText>
            Upon mashing the submit button your credit card with be charged 10¢
            an hour by Hewlett Packard Financial Services and you will receive
            your very own physical server for the maximum amount of metal on HPE
            Servers! Speed drumming here we come! If you need to read it, we got
            all the lawyer stuff that protects the artist and the venue.
          </LegalText>
        </FormWrapper>
      </TextContainer>
      {svgNamesHover.map((name, index) => (
        <SVG key={index} name={name} />
      ))}
    </Layout>
  );
};

export default Signup;
