import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { readJson, writeJson } from "../utils/jsonHandler";
import { randomUUID } from "crypto";
import path from "path";

const USERS_FILE = path.join(process.cwd(), 'local_data/users.json');

const saltRouonds = process.env.BCRYPT_SALT_ROUND;

export const register = async(
    email: string,
    password: string
): Promise<Omit<User, "password">> => {

    try{
        //load data
        const users: User[] = await readJson(USERS_FILE);

        //check duplicate 
        const normalized:string[] = users.map((user:User,index:number):string=>user.email);
        const isDuplicate: boolean = normalized.includes(email);

        if(isDuplicate){
            throw Error("Duplicated email");
        }

        const hashPass: string = await bcrypt.hash(password, Number(saltRouonds));
        const id_new: string = randomUUID();

        const newUser: User = {
            id: id_new,
            email,
            password: hashPass
        };

        users.push(newUser);
        await writeJson(USERS_FILE, users);

        return { id: id_new, email };
    } catch(error){
        throw Error(error instanceof Error ? error.message : String(error));
    }

}