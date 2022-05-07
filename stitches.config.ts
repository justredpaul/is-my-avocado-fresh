import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            white500: 'hsl(315,24%,93%)',
            darkBlue500: 'hsl(225,14%,11%)',
            blue500: 'hsl(248,19%,30%)',
        },
        space: {
            s1: '4px',
            s2: '8px',
            s3: '16px',
            s4: '20px',
            s5: '24px',
            s6: '28px',
            s7: '32px',
        },
        fonts: {
            'open-sans': 'Open Sans, apple-system, sans-serif',
        }
    }
});
