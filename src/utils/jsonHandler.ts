import { promises as fs } from "fs";
import { User } from "../models/user.model";

export async function readJson<T>(filePath: string): Promise<T> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const user: User[] = JSON.parse(data);

        return user as T;
    } catch (error) {
        throw Error(error instanceof Error ? error.message : String(error));
    }
}



export async function writeJson(filePath: string, data: User[]): Promise<void> {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch(error) {
        throw Error(error instanceof Error ? error.message : String(error));
    }
}