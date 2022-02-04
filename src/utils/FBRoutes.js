
import Main from "@/view/Main";
import Model from "@/view/sample/Model";
import Ajax from "@/view/sample/Ajax";

const routes = [
    {path : "/",      component: Main},
    {path : "/main",  component: Main},
    {path : "/model", component: Model},
    {path : "/ajax",  component: Ajax},
];

export default routes;