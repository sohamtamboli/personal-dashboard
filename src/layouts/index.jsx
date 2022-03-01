import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, LightTheme, DarkTheme } from "styles";
import useDarkMode from "hooks/useDarkMode";
import ThemeButton from "components/ThemeButton";

const Container = styled.div`
	display: flex;
	height: 100vh;
	color: ${({ theme }) => theme.text};
`;
const SidebarContainer = styled.div`
	flex: 0.2;
	padding: 40px;
	background-color: ${({ theme }) => theme.bgSidebar};
	/* box-shadow: 2px 0px 20px 10px #999999; */
`;
const MainContainer = styled.div`
	flex: 0.8;
	padding: 40px 60px;
	background-color: ${({ theme }) => theme.bgMain};
`;

const DefaultLayout = ({ children }) => {
	const [theme, toggleTheme] = useDarkMode();
	const mode = theme === "light" ? LightTheme : DarkTheme;
	return (
		<>
			<ThemeProvider theme={mode}>
				<GlobalStyles />
				<Container>
					<SidebarContainer>{children[0]}</SidebarContainer>
					<MainContainer>
						<ThemeButton theme={theme} toggleTheme={toggleTheme} />
						{children[1]}
					</MainContainer>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default DefaultLayout;
