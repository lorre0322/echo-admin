<script>
	import { req ,getCookie, setCookie } from "$lib/utils";
	import { goto } from "$app/navigation";
	import { prompt } from "$lib/utils/prompt.js";
	import { onMount } from "svelte";
	let user='',pw='',mail='lorre0322@foxmail.com'
	let loading = false
	let signupMode=false
	// togglt mod
	function toogleMod() { 
		signupMode = !signupMode
	}
	// Login and signup
	async function login() {
		loading=true
		const params = {user,pw }
		if(getCookie().token){
			params.user=(getCookie().user)
			params.token=(getCookie().token)
		}
		const data = await req.post('login',params)
		if(data.ok){
			setCookie('token',data.token)
			setCookie('user',data.user)
			prompt.sc('Login success')
			setTimeout(() => { goto('/admin') }, 2000);
		}else{
			prompt.er(data.cause || 'Login failed.')
		}
		loading=false
	}
	async function signup(params) {
		loading=true
		const data = await req.post('signup',{
			user,pw,mail
		})
		if(data.ok){
			prompt.sc(`${data.group} ${data.user} signup success.`)
		}else{
			prompt.er(data.cause || 'Signup failed.')
		}
		loading=false
	}
	// If have cookie auto login
	onMount(()=>{
		const user=getCookie().user,token=getCookie().token
		if(user&&token){
			login()
		}
	})
</script>

<form class="login"
	on:submit|preventDefault={() => (signupMode ? signup() : login())}>
	<div class="flex bw">
		{#if signupMode}
			<h2 class="an">Signup</h2>
		{:else}
			<h2 class="an">Login</h2>
		{/if}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={toogleMod} on:keydown={toogleMod}>
			<span>Login</span>
			<span class="toggle" class:on={signupMode} />
			<span>Signup</span>
		</div>
	</div>

	<div class="cont">
		<input placeholder="user" type="text" bind:value={user}>
		<input placeholder="password" type="password" bind:value={pw}>
		{#if signupMode}
			<input class="an" placeholder="email" type="email" bind:value={mail}>
		{/if}
	</div>

	<div class="flex r">
		<button disabled={loading}>
			{#if signupMode}
				Signup
			{:else}
				Login
			{/if}
		</button>
		</div>
	</form>

<style>
	.login{
		margin-top: 22vh;
		transition: margin-top .2s;
	}
	.cont{
		min-height: 175px;
	}
	button{
		width: 100%;
	}
</style>