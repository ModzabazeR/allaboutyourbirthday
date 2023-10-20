import { searchCollection, getCollection } from '$db/collections';

export async function GET(req: Request): Promise<Response> {
	const url = new URL(req.url);
	let day = url.searchParams.get('day');
	let month = url.searchParams.get('month');

    let newsList: any[] = [];

	if (day !== null && month !== null) {
		newsList = await searchCollection(Number(day), Number(month));
	} else {
        // get all news
        newsList = await getCollection(0, 0);
    }

	return new Response(JSON.stringify(newsList));
}
