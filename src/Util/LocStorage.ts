import DataStorage from '../Interfaces/DataStorage';

class LocStorage implements DataStorage {

    private get storageKey(): string {
        return 'FormCreatorDataStorage';
    };

    private get storage(): {[index: string]: any} {
        return JSON.parse(window.localStorage.getItem(this.storageKey) || '{}');
    }

    constructor() {
        if (!window.localStorage) throw new Error('Local storage not available');
        if (!this.storage) window.localStorage.setItem(this.storageKey, "{}");
    }

    private setStorage(forms: Object): void {
        window.localStorage.setItem(this.storageKey, JSON.stringify(forms));
    }

    saveDocument(formData: {[index: string]: any}): string {
        const docID = `document=${Date.now().toString()}`
        this.setStorage({
            ...this.storage,
            [ docID ]: formData
        });
        return docID;
    }

    loadDocument(docID: string): Object {
        return this.storage[docID] || {};
    }

    getDocuments(): Array<string> {
        return Object.keys(this.storage);
    }
}

export default LocStorage;
