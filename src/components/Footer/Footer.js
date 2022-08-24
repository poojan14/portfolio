import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">7359-709-747</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pvs09747@gmail.com">
            pvs09747@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <h4>Quote:</h4>
        <CompanyContainer>
          <Slogan>If you're not scared, then you're not taking a chance. And if you're not taking a chance, then what the hell are you doing anyway?</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/poojan14/">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/poojan-shah-01739a1b5">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
        </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
