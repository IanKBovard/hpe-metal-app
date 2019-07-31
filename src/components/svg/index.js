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
      return <Hand className={props.className}/>;
    case 'Red-Accent':
      return <RedAccent className={props.className}/>;
    case 'Yellow-Accent':
      return <YellowAccent className={props.className}/>;
    case 'Pink-Accent':
      return <PinkAccent className={props.className}/>;
    case 'Anchor':
      return <Anchor />;
    case 'Bird':
      return <Bird />;
    case 'Button-Accent':
      return <ButtonAccent />;
    case 'Eye':
      return <Eye />;
    case 'Flower':
      return <Flower />;
    case 'Guitar-Green':
      return <GuitarGreen />;
    case 'Guitar-Purple':
      return <GuitarPurple />;
    case 'Heart':
      return <Heart />;
    case 'Lightning-Blue':
      return <LightningBlue />;
    case 'Lightning-Green':
      return <LightningGreen />;
    case 'Lightning-Purple':
      return <LightningPurple />;
    case 'Skull-Blue':
      return <SkullBlue />;
    case 'Skull-Red':
      return <SkullRed />;
    case 'Skull-Yellow':
      return <SkullYellow />;
    case 'Swords':
      return <Swords />;
    default:
      return;
  }
};

export default SVG;
