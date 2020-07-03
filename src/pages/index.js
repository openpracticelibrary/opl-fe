import GenericPage from "./GenericPage";
import AllPractices from "./AllPractices";
import Practice from "./Practice";
import Home from "./Home";
import About from "./About";

export const AllPracticesPage = (props) => GenericPage(AllPractices, props);
export const PracticePage = (props) => GenericPage(Practice, props);
export const HomePage = (props) => Home(props);
export const AboutPage = (props) => GenericPage(About, props);
