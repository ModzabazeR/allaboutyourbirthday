import { MONGO_URL } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_URL);

export async function connect(): Promise<void> {
	await client.connect();
}

export async function disconnect(): Promise<void> {
    await client.close();
}

export function getDB() {
    return client.db('allaboutyourbirthday');
}