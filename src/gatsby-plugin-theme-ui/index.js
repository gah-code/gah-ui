const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    bodyArticle: 'georgia',
  },
  fontSizes: [10, 13, 18, 21, 26, 34, 48],
  fontWeights: {
    light: 200,
    regular: 400,
    medium: 500,
    bold: 600,
    heavy: 700,
  },
  lineHeights: ['1em', '1.25em', '1.6em'],
  letterSpacing: ['-0.025em', '0.025em', '0.125em'],
  text: {
    body: {
      fontFamily: 'body',
      fontSize: '2',
      fontWeight: 'regular',
      lineHeight: '2',
      letterSpacing: '1',
    },
    headline: {
      fontFamily: 'body',
      fontSize: '6',
      fontWeight: 'heavy',
      lineHeight: '0',
      letterSpacing: '0',
    },
    caps: {
      fontFamily: 'body',
      fontSize: '1',
      fontWeight: 'bold',
      lineHeight: '1',
      letterSpacing: '2',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'body',
      fontSize: '1',
      fontWeight: 'regular',
      fontStyle: 'italic',
      lineHeight: '1',
      letterSpacing: '1',
    },
    sectionHeader: {
      fontFamily: 'body',
      fontSize: '4',
      fontWeight: 'bold',
      lineHeight: '0',
      letterSpacing: '0',
    },
  },
  styles: {
    root: {
      backgroundColor: 'white',
      margin: 'auto',
      maxWidth: '1080px',
      padding: '40px',
    },
  },
  space: {
    xxs: 5,
    xs: 10,
    s: 15,
    m: 20,
    l: 30,
    xl: 45,
    xxl: 60,
    xxxl: 90,
  },
};

export default theme;
