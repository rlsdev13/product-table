<script lang="ts">
    import { onMount } from 'svelte';

    import { productStore } from '../../stores/product.store';
    import type { Product } from '../../intefaces/product.interface';

    onMount(async() => {
        const productos = await getProducts();
        console.log(productos);
        productStore.setAll(productos);
    });


    async function getProducts() : Promise<Product[]>{
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            return await response.json();
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    

</script>

<div class="table-container">
	<table class="table table-hover">
		<thead>
			<tr>
                <th>Sku</th>
				<th>Producto</th>
				<th>Precio</th>
				<th>Descripcion</th>
			</tr>
		</thead>
		<tbody>
			<!-- {#each tableArr as row, i} -->
				<tr>
					<td>row.position</td>
					<td>row.name</td>
					<td>row.symbol</td>
					<td>row.weight</td>
				</tr>
			<!-- {/each} -->
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>totalWeight</td>
			</tr>
		</tfoot>
	</table>
</div>

