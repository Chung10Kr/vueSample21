
import Home from "@/view/Home";
import About from "@/view/About";
import Ajax from "@/view/sample/Ajax";

const routes = [
    {path : "/",      component: Home},
    {path : "/home",  component: Home},
    {path : "/about", component: About},
    {path : "/ajax",  component: Ajax},
];

export default routes;