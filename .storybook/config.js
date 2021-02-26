import React from 'react';
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from 'styled-components';

import ApolloWrapper from "../components/particles/apollo/provider";
import themeDefault from '../components/particles/themeDefault';
import GlobalStyles from '../components/particles/globalStyles';



configure(require.context("../components", true, /\.stories\.js$/), module);


const GlobalWrapper = storyFn => (
    <ApolloWrapper>
        <ThemeProvider theme={themeDefault}>
            <GlobalStyles />
            {storyFn()}
        </ThemeProvider>
    </ApolloWrapper>
)

addDecorator(GlobalWrapper);
