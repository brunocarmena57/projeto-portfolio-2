import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Sobre nós</SectionTitle>
    <SectionText>
    Nossa equipe é composta por pessoas dedicadas que possuem uma riqueza de conhecimento e experiência no mundo do marketing digital e dos negócios. Juntos, estamos empenhados em fornecer a você os recursos, as ferramentas e a orientação de que você precisa para se destacar.
    </SectionText>
    <SectionText>
    Acreditamos que a transparência, a inovação e a colaboração são fundamentais para o nosso sucesso e para o seu. Acreditamos em compartilhar conhecimento e empoderar a comunidade de empreendedores, permitindo que você alcance suas metas e crie um impacto duradouro.
    
    </SectionText>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
