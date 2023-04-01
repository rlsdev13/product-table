<script lang="ts">
    import { modalStore } from '@skeletonlabs/skeleton';
    import type { Product } from '../intefaces/product.interface';
    import { productStore } from '../stores/product.store';

    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

    export let parent: any;

    let price = '';

    let item : Partial<Product> = {
        category : '',
        description : '',
        image : '',
        title : ''
    };

    const onFormSubmit = () => {
        item.price = +price;
        item.id = 12;
        productStore.add(item as Product);
        console.log($productStore);
        modalStore.close();
    }

</script>

<div class="modal-example-form {cBase}">
	<header class={cHeader}>{$modalStore[0]?.title ?? '(title missing)'}</header>
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form on:submit|preventDefault={onFormSubmit} class="modal-form {cForm}">
		<label class="label">
			<span>Producto</span>
			<input class="input" required type="text" bind:value={item.title} placeholder="Ingresar producto..." />
		</label>
		<label class="label">
			<span>Precio</span>
			<input class="input" required type="text" bind:value={price} placeholder="Ingresar precio..." />
		</label>
		<label class="label">
			<span>Descripcion</span>
			<input class="input" required type="text" bind:value={item.description} placeholder="Ingresar descripcion..." />
		</label>
        <label class="label">
			<span>Categoria</span>
			<input class="input" required type="text" bind:value={item.category} placeholder="Ingresar categoria..." />
		</label>
        <label class="label">
			<span>Imagen</span>
			<input class="input" required type="text" bind:value={item.image} placeholder="Ingresar url de imagen..." />
		</label>
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonPositive}" type="submit">Submit Form</button>
        </footer>
	</form>
	<!-- prettier-ignore -->
</div>