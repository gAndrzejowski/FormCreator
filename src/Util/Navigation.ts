export const navigateHome = (): void => {window.location.href = 'index.html';};

export const navigateToDocument = (id: string): void => {window.location.href = `edit-document.html?id=${id}`};

export const navigateToList = (): void => {window.location.href = "document-list.html"};

export const navigateToNewDocument = (): void => {window.location.href = "new-document.html"};


