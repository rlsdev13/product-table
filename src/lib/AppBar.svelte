<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<Fa icon={faBars} size="lg" />
	</svelte:fragment>
	Orders
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>