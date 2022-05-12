import styled, { createGlobalStyle } from "styled-components";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
export const GlobalStyle = createGlobalStyle`
    :root {
   
    --g-color-background: white;
    --g-color-background-second: #171721;
    --g-color-background-box: #212529;
    --g-color-background-third: #621341;
    --g-color-background-transparent: transparent;
    --g-color-background-box-hover: #282C31;
    --g-color-background-span: #F7F7F7;
    --g-color-background-red: red;
    --g-color-highlight-first: #24AFDA;
    --g-color-highlight-blue: #24AFDA;
    --g-color-highlight-npc:#B7DE53;
    --g-color-highlight-green:#B7DE53;
    --g-color-highlight-quest: #7661B6;
    --g-color-highlight-purple: #7661B6;
    --g-color-highlight-pink: #FC1D8D;
    --g-color-highlight-orange: #DE7800;
    --g-color-highlight-red: red;
    --g-ncols: 12;
    
    --g-text-font-size-0: 8px;
    --g-text-font-size-1: 12px;
    --g-text-font-size-2: 14px;
    --g-text-font-size-3: 16px;
    --g-text-font-size-4: 20px;
    --g-text-font-size-5: 24px;
    --g-text-font-size-6: 36px;
    --g-text-font-size-7: 48px;
    --g-text-font-size-8: 60px;
    --g-text-font-size-9: 72px;
    html{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color:#171620;
        font-size: 16px;
    }
    }
    a {
    text-decoration: none;
    color: var(--color-black);
    margin: 0;
    padding: 0;
    cursor: pointer;
}
    a:visited {
    text-decoration: none;
    }
    iframe{
        margin-bottom: 24px;
    }
    a:hover {
    text-decoration: none;
    }
    a:focus {
    text-decoration: none;
    }
    a:hover,
    a:active {
    text-decoration: none;
    }
    h1{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    p{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    h2{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    figure{
        margin: 0;
        padding: 0;
    }
    li{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    iframe{
        position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
`;

export const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    background-color: var(--g-color-background);
`;

export const MainContainer = styled.div`
    width: 40vw;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 90vw;
    }
`;

export const SubMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) =>
        props.alignItems ? props.alignItems : "flex-start"};
    width: 100%;
    padding: ${(props) => (props.padding ? props.padding : "0 0 0 0")};
    margin: ${(props) => (props.margin ? props.margin : "0 0 0 0 ")};
`;

export const Title = styled.h1`
    font-family: helvetica;
    font-size: var(--g-text-font-size-6);
    color: ${(props) => (props.color ? props.color : "black")};
`;

export const SubTitle = styled.h2`
    font-family: helvetica;
    font-size: var(--g-text-font-size-5);
    color: ${(props) => (props.color ? props.color : "black")};
`;

export const DetailTitle = styled.h3`
    font-family: helvetica;
    font-size: var(--g-text-font-size-4);
    color: ${(props) => (props.color ? props.color : "black")};
    margin: 0;
`;

export const DetailSubTitle = styled.h4`
    font-family: helvetica;
    margin: 24px 0 4px 0;
    font-size: ${(props) =>
        props.size === "lg"
            ? `var(--g-text-font-size-4)`
            : `var(--g-text-font-size-3)`};
    color: ${(props) => (props.color ? props.color : "black")};
`;

export const SeperateLine = styled.hr`
    color: lightgray;
    width: 100%;
    margin-bottom: 12px;
    border: 0.05px solid;
`;

export const ContentBox = styled.div`
    width: 100%;
    margin: ${(props) => (props.margin ? props.margin : "4px 0 24px 0")};
`;

export const TitleBox = styled(ContentBox)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    cursor: pointer;
`;

export const Content = styled.p`
    font-family: helvetica;
    font-size: var(--g-text-font-size-3);
    font-weight: ${(props) => (props.weight ? props.weight : 400)};
    color: black;
    padding: 4px 0 4px 0;
`;

export const Li = styled.li`
    margin-left: 16px;
    color: black;
    padding: 4px 0 4px 0;
    line-height: 1.6;
`;

export const CloseIcon = styled(BsFillCaretRightFill)`
    margin-right: 4px;
`;
export const OpenIcon = styled(BsFillCaretDownFill)`
    margin-right: 4px;
`;
