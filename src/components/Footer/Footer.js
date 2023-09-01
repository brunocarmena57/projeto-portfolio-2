import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="http://wa.me/5541997587685">WhatsApp</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:marketingbrothers418@gmail.com">
          marketingbrothers418@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; {year} <Link href="https://www.instagram.com/marketingbrothers__/">Marketing Brothers</Link>. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.instagram.com/marketingbrothers__/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://www.tiktok.com/@marketingbrothers_">
        <FaTiktok size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
