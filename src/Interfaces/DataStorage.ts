interface DataStorage {
    saveDocument(formData: Object): string,
    loadDocument(documentId: string): Object,
    getDocuments(): Array<string>
};

export default DataStorage;