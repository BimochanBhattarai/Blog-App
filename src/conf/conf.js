const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRIGHT_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRIGHT_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRIGHT_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRIGHT_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRIGHT_BUCKET_ID),

}

export default conf;