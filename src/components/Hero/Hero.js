import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Passsionate Full Stack Developer with hands-on experience in developing scalable websites using range of front-end and back-end skills like HTML, CSS, JavaScript, NodeJS, ReactJS, Mongodb, REST, GraphQL, NextJS etc. Looking to further enhance my skills along with AWS Cloud technolgy. 
        </SectionText>
        <Button onClick={()=>window.location='"https://www.linkedin.com/in/poojan-shah-01739a1b5'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;