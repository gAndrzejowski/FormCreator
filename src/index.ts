import App from './Components/App';

const rootElement: HTMLElement | null = document.getElementById('appRoot');
console.log(`Root Element: ${rootElement}`);

rootElement && App.render(rootElement);