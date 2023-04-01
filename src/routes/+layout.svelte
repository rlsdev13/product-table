<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, type ModalComponent } from '@skeletonlabs/skeleton';
	import AppBar from '$lib/AppBar.svelte';
	import AppRail from '$lib/AppRail.svelte';

	import { Modal } from '@skeletonlabs/skeleton';
	import ItemForm from '$lib/Form.svelte';

	import { Toast } from '@skeletonlabs/skeleton';

	const modalComponentRegistry: Record<string, ModalComponent> = {

		// Custom Modal 1
		modalComponentOne: {
			// Pass a reference to your custom component
			ref: ItemForm,
			// Add the component properties as key/value pairs
			props: { background: 'bg-red-500' },
			// Provide a template literal for the default component slot
			slot: '<p>Skeleton</p>'
		},

	};
</script>

<Toast />
<Modal components = {modalComponentRegistry} />
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
