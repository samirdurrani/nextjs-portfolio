import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Container from "components/Layout/Container";
import { StringProps } from "helpers/types";
import { devices } from "helpers/displayDevice";
import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Samir.png";

const Home: NextPage = () => {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <RoundImage
            src={ProfilePicture}
            alt="Samir"
            width="300px"
            height="300px"
          />
          <Flex justify="flexStart" align="baseline">
            <h2>Hey, I'm Samir! Welcome to my online oasis 👋</h2>
          </Flex>
          <p>
            I'm actively seeking roles in medicine, research, and public health in San Francisco!
          </p>
          <p>
            Data scientist with 5+ years experience building data infrastructure, tools, and 
            visualisations to deliver insights to decisionmakers. I've worked as a data science 
            consultant for political campaigns, public health organizations, and public sector institutions. 
            I currently work at The Trevor Project, supporting a suicide prevention hotline for LGBTQ+ young people 
            in the United States and México.
          </p>
        </ContentWrapper>
      </HeroFlex>
    </Container>
  );
};

export default Home;

export const ContentWrapper = styled.div<StringProps>`
  h2 {
    margin: 2rem 0.5rem 2rem 0;
  }

  ${Flex} {
    font-size: 1.5rem;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
