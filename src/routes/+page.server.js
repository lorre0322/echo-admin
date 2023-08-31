import { redirect } from '@sveltejs/kit';
import { req } from "$lib/utils";
export async function load({ cookies, url }) {
  const user=cookies.get('user'),token=cookies.get('token')
  // console.log(user,token);
  // if(user&&token){
  //   const data = await req.post('login',{name:user,token})
  //   if(data.ok){
  //     cookies.set('user',data.user, { path:'/', maxAge:604800 })
  //     cookies.set('token',data.token, { path:'/', maxAge:604800 })
  //   }
  // }
}

// export const actions={
//   default:async({request})=>{
//     const body = await request.formData()
//     console.log(body);
//   }
// }