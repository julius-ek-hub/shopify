import  {createTheme}  from "@mui/material/styles";

const {palette: {augmentColor}} = createTheme();

const createColor = (mainColor) => augmentColor({color: {main: mainColor}});

const themes = createTheme({
    palette: {
      black: createColor('#FFFFFF'),
      'green': createColor('#008060')
    },
  });

  export default themes;