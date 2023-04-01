<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import AppBar from '$lib/AppBar.svelte';
	import AppRail from '$lib/AppRail.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
			<AppRail />
	</svelte:fragment>
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="p-7">
		<slot />

	</div>
</AppShell>
