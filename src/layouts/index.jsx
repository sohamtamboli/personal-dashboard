import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "styles";

const Container = styled.div`
	display: flex;
	height: 100vh;
`;
const SidebarContainer = styled.div`
	flex: 0.2;
	/* background-color: red; */
	padding: 40px;
	box-shadow: 2px 0px 20px 10px #999999;
`;
const MainContainer = styled.div`
	flex: 0.8;
	/* background-color: blue; */
	padding: 40px 60px;
`;

const DefaultLayout = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<SidebarContainer>{children[0]}</SidebarContainer>
				<MainContainer>{children[1]}</MainContainer>
			</Container>
		</>
	);
};

export default DefaultLayout;
