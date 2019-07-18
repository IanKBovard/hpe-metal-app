import React from 'react';

import Hand from './Hand';
import PinkAccent from './PinkAccent';
import RedAccent from './RedAccent';
import YellowAccent from './YellowAccent';

import Anchor from './Anchor';
import Bird from './Bird';
import ButtonAccent from './ButtonAccent';
import Eye from './Eye';
import Flower from './Flower';
import GuitarGreen from './GuitarGreen';
import GuitarPurple from './GuitarPurple';
import Heart from './Heart';
import LightningBlue from './LightningBlue';
import LightningGreen from './LightningGreen';
import LightningPurple from './LightningPurple';
import SkullBlue from './SkullBlue';
import SkullRed from './SkullRed';
import SkullYellow from './SkullYellow';
import Swords from './Swords'

const SVG = props => {
  switch (props.name) {
    case 'Hand':
      return <Hand />;
    case 'Red-Accent':
      return <RedAccent />;
    case 'Yellow-Accent':
      return <YellowAccent />;
    case 'Pink-Accent':
      return <PinkAccent />;
    case 'anchor':
      return <Anchor />;
    case 'bird':
      return <Bird />;
    case 'button accent':
      return <ButtonAccent />;
    case 'eye':
      return <Eye />;
    case 'flower':
      return <Flower />;
    case 'guitar green':
      return <GuitarGreen />;
    case 'guitar purple':
      return <GuitarPurple />;
    case 'heart':
      return <Heart />;
    case 'lightning blue':
      return <LightningBlue />;
    case 'lightning green':
      return <LightningGreen />;
    case 'lightning purple':
      return <LightningPurple />;
    case 'skull blue':
      return <SkullBlue />;
    case 'skull red':
      return <SkullRed />;
    case 'skull yellow':
      return <SkullYellow />;
    case 'swords':
      return <Swords />;
    default:
      return;
  }
};

export default SVG;
