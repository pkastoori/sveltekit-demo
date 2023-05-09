/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import { format } from 'date-fns';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const title = data.get('title');
		const content = data.get('content');
		const createdDate = format(new Date(data.get('createdDate')), 'yyyy-MM-dd');

		console.log(title, content, createdDate);

		throw redirect(302, '/');
	}
};
