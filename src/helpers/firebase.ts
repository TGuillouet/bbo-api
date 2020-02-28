import * as firebase from 'firebase-admin';

async function getDocumentsFromCollection<T>(collectionName: string): Promise<T[]> {
    const documents: T[] = []
    await firebase.firestore().collection(collectionName).get().then((snap: firebase.firestore.QuerySnapshot) => {
        if (snap.empty) {
            return;
        }
        snap.forEach(doc => {
            const data = doc.data() as T;

            documents.push(data);
        });
    });
    return documents;
}

export {
    getDocumentsFromCollection,
};
