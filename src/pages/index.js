import GenericPage from "./GenericPage";
import Practices from "./Practices";
import PracticePageContent from "./PracticePageContent";
import Home from "./Home";

export const PracticesPage = (props) => GenericPage(Practices);
export const PracticePageContentPage = (props) => GenericPage(PracticePageContent, props);
export const HomePage = (props) => Home(props);
