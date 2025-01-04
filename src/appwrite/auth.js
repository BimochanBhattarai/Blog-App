import conf from "../conf/conf";

// This is from the documentation of Appwrite
// We are modifying major code as given to the documentation for optimal use of the code

import { Client, Account, ID } from "appwrite";

export class AuthService {
	client = new Client();
	account;

	// In the documentation, there was not any constructor but we use here to optimise the code and run all this only when a new object is created!!

	constructor() {
		// We can change the constructor if we choose to shift the backend service accordingly || Creating a modular code here
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

		this.account = new Account(this.client);
	}

	async createAccount({ email, password, name }) {
		// There could be some conditions when account is not created so we are using try catch
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			); //You will know what to pass once you read the documention of the backend service || if we change the backend service we will have to change only this line not the createAccount function making a level of abstraction.
			if (userAccount) {
				//We will directly login the user to the dashboard. we can also return a message to the user and they can login in manually.
				return this.login({ email, password });
			} else {
				return userAccount; // Will handle null later if account is not created
			}
		} catch (error) {
			throw error;
		}
	}

	async login({ email, password }) {
		try {
			return await this.account.createEmailPasswordSession(
				email,
				password
			);
		} catch (error) {
			throw error;
		}
	}

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error) // Second option if we don't wanna throw the error || another way to handel an error
        }

        return null; // If we couldn't reach to the account or any error happens on the way
    }

    async logout(){
        try {
            return await this.account.deleteSession(
                'current'
            )
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService;


// This file is now can be used for all the frontend app using Appwrite with above services.
// If we change the backend service, we just need to change this configuration in methods without changing the parameters we use. Other files will be independent of the backend.