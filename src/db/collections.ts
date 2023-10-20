import { getDB } from '$db/mongo';

const db = getDB();

export async function getCollection(skip: number, limit: number) {
	const data = await db.collection('floridaman').find().skip(skip).limit(limit).toArray();
	return data;
}

export async function searchCollection(day: number, month: number) {
	// get repositories from MongoDB with search query and regex options
	const data = await db
		.collection('floridaman')
		.find({ day: day, month: month })
		.project({ _id: 0 })
		.toArray();

	// return JSON response
	return data;
}
