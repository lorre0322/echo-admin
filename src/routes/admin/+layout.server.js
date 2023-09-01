import { redirect } from '@sveltejs/kit';
import { req } from "$lib/utils";
export async function load({ cookies, url }) {
  const user=cookies.get('user'),token=cookies.get('token')
  if(!user||!token){
    throw redirect(303, `/?re=${url.pathname}`);
  }
}