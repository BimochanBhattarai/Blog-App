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

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		// If we have to change database again, we will just have to change te below setting, the method will be the same !!!
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
					userId,
				}
			);
		} catch (error) {
			console.log("Appwrite servie :: createPost :: error ", error);
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
				}
			);
		} catch (error) {
			console.log("Appwrite servie :: updatePost :: error ", error);
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite servie :: deletePost :: error", error);
			return false;
		}
	}

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite servie :: getPost :: error",error)
            return false
        }
    }
}

const service = new Service();

export default service;
