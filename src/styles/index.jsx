import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const LightTheme = {
	bgMain: "#f3f4f5",
	bgSidebar: "#ffffff",
	text: "#000",
};
export const DarkTheme = {
	bgMain: "#1d1a27",
	bgSidebar: "#2a2538",
	text: "#fff",
};
