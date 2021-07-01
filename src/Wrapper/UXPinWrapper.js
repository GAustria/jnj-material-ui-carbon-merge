import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
// import "../styles/carbon-components.css"
// import '../Fonts/stylesheet.css'

const theme = createMuiTheme({
  palette: {
    primary: { main: "#CA0018" }, 
    secondary: { main: "#000099" }, 
  },
  typography: { 
    fontFamily: [ 'J&J CircularTT Black Italic Web', 'J&J CircularTT Bold Web', 'J&J CircularTT Bold Italic Web', 'J&J CircularTT Book Web', 'J&J CircularTT Book Italic Web', 'J&J CircularTT Light Web', 'J&J CircularTT Light Italic Web', 'J&J CircularTT Medium Web', 'J&J CircularTT Medium Italic Web', 'J&J CircularTT Black Web' ].join(','),
    color: "#212121",
    h1: {
      fontFamily: 'J&J CircularTT Black Web',
      fontSize: 60,
      color: "#212121"
    },
    h2: {
      fontFamily: 'J&J CircularTT Black Web',
      fontSize: 40,
      color: "#212121"
    },
    h3: {
      fontFamily: 'J&J CircularTT Black Web',
      fontSize: 28,
      color: "#212121"
    }
  },
  shape: {
    borderRadius: 0
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'J&J CircularTT Black Web',
        fontSize: 60,
        color: "#212121"
      }
    }
  }
});

export default function UXPinWrapper({ children }) {
  let icons = document.createElement('link');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  icons.setAttribute('rel', 'stylesheet');
  document.head.appendChild(icons);

  // let roboto = document.createElement('link');
  // roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  // roboto.setAttribute('rel', 'stylesheet');
  // document.head.appendChild(roboto);

  let styles = document.createElement('link');
  styles.setAttribute('href', '	https://unpkg.com/carbon-components/css/carbon-components.min.css');
  // styles.setAttribute('type', 'text/css');
  styles.setAttribute('rel', 'stylesheet');
  document.head.appendChild(styles);

  let JNJCircular = document.createElement('link');
  JNJCircular.setAttribute('href', 'src/Fonts/stylesheet.css');
  JNJCircular.setAttribute('rel', 'stylesheet');
  document.head.appendChild(JNJCircular);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

// fontFamily: [ 'J&J CircularTT Black Italic Web', 'J&J CircularTT Bold Web', 'J&J CircularTT Bold Italic Web', 'J&J CircularTT Book Web', 'J&J CircularTT Book Italic Web', 'J&J CircularTT Light Web', 'J&J CircularTT Light Italic Web', 'J&J CircularTT Medium Web', 'J&J CircularTT Medium Italic Web', 'J&J CircularTT Black Web' ].join(',')
