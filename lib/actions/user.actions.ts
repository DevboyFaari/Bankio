'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { cookies } from "next/dist/client/components/headers";

export const SignIn = async ({email, password}:signInProps) => {
    try {
        const { account } = await createSessionClient();
        const response = await account.createEmailPasswordSession(email, password);
        return parseStringify(response)
    } catch (error) {
        console.error('Error', error)
    }
}


export const SignUp =async ({userData}:SignUpParams) => {
    const {email, password, firstName, lastName } = userData;
    try {
        const { account } = await createAdminClient();

       const newUserAccount = await account.create(ID.unique(), 
        email,
         password,
          `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        
       return parseStringify(newUserAccount);
    } catch (error) {
        console.error('Error', error)
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();
      return parseStringify(user);
    }
    catch (error){
        return null;
    }
        
    }


  

    export const logOutAccount = async() =>{
        try {
            const {account} = await createSessionClient();
            cookies().delete('appwrite-session');
            await account.deleteSession('current')
        } catch (error) {
            return null;
        }
    }

