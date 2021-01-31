import amazonImage from "./assets/portfolio/amazon.png";
import messengerImage from "./assets/portfolio/messenger.png";
import twitterImage from "./assets/portfolio/twitter.png";
import covidImage from "./assets/portfolio/covid.png";
import moreImage from "./assets/portfolio/more.png";

const html5Image =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/1_Html5.png";
const css3Image =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/2_CSS3.png";
const javaScriptImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/3_JavaScript.png";
const reactImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/4_React.png";
const reduxImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/5_Redux.png";
const pythonImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/6_Python.png";
const djangoImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/7_Django.png";
const drfImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/8_DRF.png";
const vSCodeImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/9_VSCode.png";
const pyCharmImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/A_PyCharm.png";
const styledComponentsImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/B_styled-components.png";
const gitlabCICDImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/C_gitlab-ci-cd.png";
const dockerImage =
  "https://raw.githubusercontent.com/GozAttila/GozAttila/main/assets/D_docker.png";

export const projects = [
  {
    id: 1,
    image: covidImage,
    heading: "Covid-19 Tracker",
    text: "Covid-19 pandemic visualization app",
    // tech: [html5Image, css3Image, javaScriptImage, reactImage],
    tech: [
      { image: html5Image, name: "HTML5" },
      { image: css3Image, name: "CSS3" },
      { image: javaScriptImage, name: "JS" },
      { image: reactImage, name: "react" },
    ],
    appLink: "https://covid-19-tracker-by-ga.netlify.app/",
    codeLink: "https://github.com/GozAttila/Covid-19-Tracker",
  },
  {
    id: 2,
    image: amazonImage,
    heading: "Amazon clone",
    text: "Amazon frontend clone with working basket and payment",
    // tech: [html5Image, css3Image, javaScriptImage, reactImage],
    tech: [{ image: html5Image, name: "HTML5" }],
    appLink: "https://clone-8e70a.web.app/",
    codeLink: "https://github.com/GozAttila/Amazon-clone",
  },
  {
    id: 3,
    image: messengerImage,
    heading: "All-In chat app",
    text: "A Messenger clone with register, login and chat function",
    // tech: [html5Image, css3Image, javaScriptImage, reactImage],
    tech: [{ image: html5Image, name: "HTML5" }],
    appLink: "https://covid-19-tracker-by-ga.netlify.app/",
    codeLink: "https://github.com/GozAttila/Covid-19-Tracker",
  },
  {
    id: 4,
    image: twitterImage,
    heading: "Twitter",
    text: "Twitter frontend clone",
    // tech: [html5Image, css3Image, javaScriptImage, reactImage],
    tech: [{ image: html5Image, name: "HTML5" }],
    appLink: "https://covid-19-tracker-by-ga.netlify.app/",
    codeLink: "https://github.com/GozAttila/Covid-19-Tracker",
  },
  {
    id: 5,
    image: moreImage,
    heading: "Next...",
    text: "Check later, what will be here",
    // tech: [html5Image, css3Image, javaScriptImage, reactImage],
    tech: [],
    appLink: "",
    codeLink: "",
  },
];
