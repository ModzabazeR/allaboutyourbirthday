export const load = ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
	});
};
