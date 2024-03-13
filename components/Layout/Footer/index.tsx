import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "helpers/types";
import ScrollToTop from "components/Elements/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          <GridContainer>
            <FlexLinks>
              <Navigation href="/" text="Home" />
              <Navigation href="https://github.com/samirdurrani?tab=repositories" text="Projects" />
              <Navigation href="https://medium.com/@samirdurrani" text="Blog" />
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="https://twitter.com/samird">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://github.com/samirdurrani">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/samirdurrani/">
                LinkedIn
              </ExternalLink>
            </FlexLinks>
            {/* <FlexLinks>
              <ExternalLink href="/">Test</ExternalLink>
              <Navigation href="/top-tracks" text="Test" />
            </FlexLinks> */}
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
