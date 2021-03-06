import GenericPage from "./GenericPage";
import AllPractices from "./AllPractices";
import Practice from "./Practice";
import Learn from "./Learn";
import About from "./About";
import NotFound from "./NotFound";

export const AllPracticesPage = props => GenericPage(AllPractices, props);
export const PracticePage = props => GenericPage(Practice, props);
export const LearnPage = props => Learn(props);
export const AboutPage = props => GenericPage(About, props);
export const NotFoundPage = props => GenericPage(NotFound, props);