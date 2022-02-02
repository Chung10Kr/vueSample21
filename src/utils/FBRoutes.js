
import Home from "@/view/Home";
import Model from "@/view/sample/Model";
import Ajax from "@/view/sample/Ajax";

const routes = [
    {path : "/",      component: Home},
    {path : "/home",  component: Home},
    {path : "/model", component: Model},
    {path : "/ajax",  component: Ajax},
];

export default routes;