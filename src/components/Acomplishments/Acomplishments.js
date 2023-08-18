import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Pessoas que fazem renda com nossos cursos' },
  { number: 10, text: 'Cursos originais', },
  { number: 1500, text: 'Downloads gratuitos', },
  { number: 200, text: 'Vendas', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Nossos números</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
