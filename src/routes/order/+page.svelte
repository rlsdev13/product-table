<script lang="ts">
	import { onMount } from 'svelte';
	import { ProgressRadial, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	import { productStore } from '../../stores/product.store';
	import type { Product } from '../../intefaces/product.interface';

	let tableSimple: TableSource = {
		head: [],
		body: []
	};

	onMount(async () => {
		const productos = await getProducts();

        const total = productos.reduce((prev, curr) => prev + curr.price, 0);
		productStore.setAll(productos);

		tableSimple = {
			head: ['Sku', 'Producto', 'Descripcion', 'Categoria', 'Precio'],
			body: tableMapperValues($productStore, ['id', 'title', 'description', 'category', 'price']),
			meta: tableMapperValues($productStore, ['id', 'title']),
			foot: ['Total', '', '', '',`$${total}`]
		};
	});

	async function getProducts(): Promise<Product[]> {
		try {
			const response = await fetch('https://fakestoreapi.com/products?limit=10');
			return await response.json();
		} catch (error) {
			return [];
		}
	}

    const selected = ( e : any ) => {
        console.log(e.detail);
    }

</script>


{#if $productStore.length > 0}
	<Table source={tableSimple} interactive={true} on:selected={selected}/>
{:else}
	<div class="flex flex-row min-h-screen justify-center items-center">
		<ProgressRadial value={undefined} />
	</div>
{/if}
