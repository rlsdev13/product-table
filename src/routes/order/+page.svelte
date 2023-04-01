<script lang="ts">
	import { onMount } from 'svelte';
	import { ProgressRadial, Table, tableMapperValues, toastStore, type ModalComponent, type ModalSettings, type ToastSettings } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';

	import { productStore } from '../../stores/product.store';
	import type { Product } from '../../intefaces/product.interface';

	// let tableSimple: TableSource = {
	// 	head: [],
	// 	body: []
	// };

	$: total = $productStore.reduce((prev, curr) => prev + curr.price, 0);

	onMount(async () => {
		const productos = await getProducts();

        // const total = productos.reduce((prev, curr) => prev + curr.price, 0);
		productStore.setAll(productos);

		// tableSimple = {
		// 	head: ['Sku', 'Producto', 'Descripcion', 'Categoria', 'Precio'],
		// 	body: tableMapperValues($productStore, ['id', 'title', 'description', 'category', 'price']),
		// 	meta: tableMapperValues($productStore, ['id', 'title']),
		// 	foot: ['Total', '', '', '',`$${total}`]
		// };
	});

	async function getProducts(): Promise<Product[]> {
		try {
			const response = await fetch('https://fakestoreapi.com/products?limit=5');
			return await response.json();
		} catch (error) {
			return [];
		}
	}

    const selected = ( e : any ) => {
        console.log(e.detail);
    }

	const openModal = () => {
		const d: ModalSettings = {
			type : 'component',
			component : 'modalComponentOne',
			title : 'Agregar producto'
		}
		
		modalStore.trigger(d)
	}

	const payment = () => {
		const t: ToastSettings = {
			message: 'Proceso exitoso!!',
			timeout: 2000,
			background: 'variant-filled-success',
		};
		toastStore.trigger(t);
	}

</script>

<div class="flex justify-end items-center">
	<button 
		class="btn rounded variant-glass-primary mb-3"
		on:click={openModal}>
		Agregar +
	</button>
</div>
{#if $productStore.length > 0}
	<!-- <Table source={tableSimple} interactive={true} on:selected={selected}/> -->
	<!-- Responsive Container (recommended) -->
	<div class="table-container">
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Sku</th>
					<th>Producto</th>
					<th>Descripcion</th>
					<th>Categoria</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				{#each $productStore as item, i}
					<tr>
						<td>{item.id}</td>
						<td>{item.title}</td>
						<td>{item.description}</td>
						<td>{item.category}</td>
						<td>${item.price}</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th colspan="4">Calculated Total Weight</th>
					<td>${total}</td>
				</tr>
			</tfoot>
		</table>
	</div>
{:else}
	<div class="flex flex-row min-h-screen justify-center items-center">
		<ProgressRadial value={undefined} />
	</div>
{/if}

<div class="flex justify-end items-center">
	<button 
		class="btn rounded variant-glass-primary mt-3"
		on:click={payment}>
		Pagar
	</button>
</div>
