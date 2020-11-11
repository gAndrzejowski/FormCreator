import Component from "../Interfaces/Component";
import Router from '../Util/router';

const App = (): Component => ({
    render(parent: HTMLElement): void {

        const rout = new Router();

        const page = rout.pickSite();
        page.render(parent);

    }
});

export default App();
