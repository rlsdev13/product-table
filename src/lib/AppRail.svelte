<script lang="ts">
    import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from "svelte/store";
    import Fa from 'svelte-fa';
	import { faListCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

    const storeValue: Writable<number> = writable(0);
</script>

<AppRail selected={storeValue}>
	<AppRailTile label="Orders" value={0} tag="a" href="/order">
        <Fa icon={faListCheck} size="lg" />
    </AppRailTile>
</AppRail>