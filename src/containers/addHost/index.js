import React from 'react';
import { Box, Form, FormField, Button, Select, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import {
  FormWrapper,
  SVGWrapper,
  TitleText,
  InfoText,
  LegalText,
  RockinText,
} from './style';

import SVG from '../../components/svg/index';

const svgNames = ['Red-Accent', 'Pink-Accent', 'Hand', 'Yellow-Accent'];

const AddHost = () => {
  return (
    <Box fill background="#1F2532" direction="row">
      <SVGWrapper>
        {svgNames.map((name, index) => (
          <SVG key={index} name={name} className={`${name}-Host`} />
        ))}
        <RockinText>More Rockin'</RockinText>
      </SVGWrapper>
      <FormWrapper background="white" pad={{left: 'large', right: 'large'}}>
        <Button
          alignSelf="end"
          plain
          icon={<Close />}
          margin={{ bottom: 'medium' }}
        />
        <Box pad={{ left: 'medium', right: 'medium', top: 'small' }}>
          <TitleText>Party on dudes!</TitleText>
          <InfoText margin={{ top: 'medium' }}>
            Like how it's all coming together? Sweet music to our ears.
          </InfoText>
          <InfoText margin={{ bottom: 'medium' }}>
            Add more Host(s) and get a bigger audience!
          </InfoText>
          <Form>
            <Box direction="column" gap="medium">
              <Select options={['1', '2', '3']} placeholder="Who's it for?" />
              <Select options={['1', '2', '3']} placeholder="How many?" />
              <Box direction="row" gap="small">
                <Box width="70%">
                  <Select
                    options={['1', '2', '3']}
                    placeholder="Operating System?"
                  />
                </Box>
                <Box width="30%">
                  <Select options={['1', '2', '3']} placeholder="Version" />
                </Box>
              </Box>
              <Select options={['1', '2', '3']} placeholder="What Flavor?" />
              <Select
                options={['1', '2', '3']}
                placeholder="Where do you want it?"
              />
              <Select
                options={['1', '2', '3']}
                placeholder="Who can access it?"
              />
            </Box>
            <Button
              disabled={true}
              margin={{ top: 'medium' }}
              primary
              alignSelf="start"
              type="submit"
              color="brand"
              label="Party On"
            />
          </Form>
        <LegalText margin={{top: 'medium'}}>
          Upon mashing the submit button your credit card with be charged 10¢ an
          hour by Hewlett Packard Financial Services and you will receive your
          very own physical server for the maximum amount of metal on HPE
          Servers! Speed drumming here we come! If you need to read it, we got
          all the lawyer stuff that protects the artist and the venue.
        </LegalText>
        </Box>
      </FormWrapper>
    </Box>
  );
};

export default AddHost;
