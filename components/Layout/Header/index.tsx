import Link from "next/link";
import { Navigation } from "components/Layout/Navigation";
import { COLOR_BLACK, COLOR_WHITE } from "helpers/colorPalette";

import { Wrapper, StickyNav } from "components/Layout/Header/styles";
import { Flex } from "components/Layout/Container/styles";

interface HeaderProps {
  darkTheme: boolean;
  changeTheme: () => void;
}

export const Header = ({ darkTheme, changeTheme }: HeaderProps) => {
  return (
    <StickyNav darkTheme={darkTheme}>
      <Wrapper>
        <Link href="/" passHref>
          <div>
            <h1>Samir Durrani</h1>
          </div>
        </Link>
        <Flex>
          <Navigation href="/" text="Home" />
          <Navigation href="https://github.com/samirdurrani?tab=repositories" text="Projects" />
          <Navigation href="https://medium.com/@samirdurrani" text="Blog" />
          <button onClick={changeTheme} aria-label="change-theme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={darkTheme ? COLOR_BLACK : COLOR_WHITE}
              stroke={darkTheme ? COLOR_BLACK : COLOR_WHITE}
            >
              {darkTheme ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>
        </Flex>
      </Wrapper>
    </StickyNav>
  );
};
