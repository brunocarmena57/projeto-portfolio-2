import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Marketing Brother's
        </SectionTitle>
        <SectionText>
        Somos um grupo apaixonado de empreendedores que se uniram para compartilhar o nosso conhecimento, transformando em oportunidades reais.
        </SectionText> 
        <SectionText>
        Nossa paixão por essa área nos guiou até aqui. A missão da nossa plataforma é clara: capacitar você, empreendedor, a desbloquear todo o potencial das suas vendas e transformar sua visão em resultados tangíveis.
        </SectionText>
        <SectionText>
        Confira o Curso Grátis abaixo 👇
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/cursogratis.pdf';
        }}>Curso Grátis</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
