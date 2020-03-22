import App from './Components/App';

const rootElement: HTMLElement | null = document.getElementById('appRoot');

rootElement && App.render(rootElement);