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
            primary500: 'hsl(131,52%,43%)',
        },
        space: {
            s0: '4px',
            s1: '8px',
            s2: '12px',
            s3: '16px',
            s4: '20px',
            s5: '24px',
            s6: '28px',
            s7: '32px',
            s8: '36px',
            s9: '40px',
        },
        radii: {
            r1: '8px',
            r2: '16px',
            r3: '20px',
            r4: '24px',
        },
        fonts: {
            'open-sans': 'Open Sans, apple-system, sans-serif',
        },
        fontSizes: {
            fz0: '14px',
            fz1: '16px',
            fz2: '18px',
            fz3: '24px',
        },
        fontWeights: {
            light: 300,
            regular: 400,
            semiBold: 500,
            bold: 600,
        }
    }
});
