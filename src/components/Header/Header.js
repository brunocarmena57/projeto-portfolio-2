import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import { FaTiktok } from 'react-icons/fa'

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>

        <img src="../images/logo.png" height={35} width={40} /> <span style={{ marginLeft: 15, marginTop: 7, fontSize: 20 }} >Marketing Brother's</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Cursos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Sobre Nós</NavLink>
        </Link>
      </li>
      
    </Div2>
    <Div3>
      <SocialIcons href="https://www.instagram.com/marketingbrothers__/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://www.tiktok.com/@marketingbrothers_">
        <FaTiktok size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
