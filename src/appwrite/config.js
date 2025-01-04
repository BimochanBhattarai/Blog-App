import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket; // Also called storage

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);
		this.account = new Account(this.client);

		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

    async createPost({title, slug, content, featuredImage, status, userId}) { // If we have to change database again, we will just have to change te below setting, the method will be the same !!!
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Also can use ID.Unique()
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            ) 
        } catch (error) {
            console.log("Appwrite servie :: createPost :: error ", error);
        }
    }
}

const service = new Service();

export default service;
