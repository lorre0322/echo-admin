<script>
	import { req ,delCookie } from "$lib/utils";
  import { goto } from "$app/navigation";
  async function logout() {
    delCookie('user')
    delCookie('token')
    goto('/')
  }

</script>
admin

<button on:click={logout}>logout</button>