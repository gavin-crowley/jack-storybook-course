import React from 'react';
import { addDecorator, configure } from "@storybook/react";
// import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from 'styled-components';

import themeDefault from '../components/particles/themeDefault';
import GlobalStyles from '../components/particles/globalStyles';



configure(require.context("../components", true, /\.stories\.js$/), module);


const GlobalWrapper = storyFn => (
    <ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        {storyFn()}
    </ThemeProvider>
)

addDecorator(GlobalWrapper);
// addDecorator(withKnobs);