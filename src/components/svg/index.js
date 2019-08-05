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
import Swords from './Swords';

const SVG = props => {
  switch (props.name) {
    case 'Hand':
      return <Hand className={`${props.name} ${props.class || ''}`} />;
    case 'Red-Accent':
      return <RedAccent className={`${props.name} ${props.class || ''}`} />;
    case 'Yellow-Accent':
      return <YellowAccent className={`${props.name} ${props.class || ''}`} />;
    case 'Pink-Accent':
      return <PinkAccent className={`${props.name} ${props.class || ''}`} />;
    case 'Anchor':
      return <Anchor className={`${props.name} ${props.hover}`}/>;
    case 'Bird':
      return <Bird className={`${props.name} ${props.hover}`}/>;
    case 'Button-Accent':
      return <ButtonAccent />;
    case 'Eye':
      return <Eye className={`${props.name} ${props.hover}`}/>;
    case 'Flower':
      return <Flower className={`${props.name} ${props.hover}`} />;
    case 'Guitar-Green':
      return <GuitarGreen className={`${props.name} ${props.hover}`}/>;
    case 'Guitar-Purple':
      return <GuitarPurple className={`${props.name} ${props.hover}`}/>;
    case 'Heart':
      return <Heart className={`${props.name} ${props.hover}`}/>;
    case 'Lightning-Blue':
      return <LightningBlue className={`${props.name} ${props.hover}`}/>;
    case 'Lightning-Green':
      return <LightningGreen className={`${props.name} ${props.hover}`}/>;
    case 'Lightning-Purple':
      return <LightningPurple className={`${props.name} ${props.hover}`}/>;
    case 'Skull-Blue':
      return <SkullBlue className={`${props.name} ${props.hover}`}/>;
    case 'Skull-Red':
      return <SkullRed className={`${props.name} ${props.hover}`}/>;
    case 'Skull-Yellow':
      return <SkullYellow className={`${props.name} ${props.hover}`}/>;
    case 'Swords':
      return <Swords className={`${props.name} ${props.hover}`}/>;
    default:
      return;
  }
};

export default SVG;
