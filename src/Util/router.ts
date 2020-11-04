import Component from '../Interfaces/Component';
import Homepage from '../Components/Homepage';
import DocumentList from '../Components/DocumentList';
import NewDocument from '../Components/NewDocument';

class Router {

    protected page: string;
    protected params: URLSearchParams;

    constructor() {
        const address = window.location.href;
        const parts = address.split('/');
        this.page = parts[parts.length - 1]; 
        this.params = new URLSearchParams(window.location.search.substr(1));
    }

    pickSite(): Component {
        switch(this.page) {
            case 'document-list.html':
                return new DocumentList();
            case 'new-document.html':
                return new NewDocument();
            default: 
                return new Homepage();
        }
    }

}

export default Router;
