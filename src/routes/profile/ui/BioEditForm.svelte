<script lang="ts">
	import { enhance } from '$app/forms';
	import { clickOutside } from '$root/lib/helpers';
	import Icon from '@iconify/svelte';

	export let currentBio: string = '';
	export let isOpen: boolean = false;
	export let userId: number;
	let newBio: string = currentBio;

	function handleCancel() {
		newBio = currentBio;
		isOpen = false;
	}
</script>

{#if isOpen}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div
			use:clickOutside
			onclick_outside={() => (isOpen = false)}
			class="bg-base-100 p-6 rounded-lg max-w-md w-full shadow-xl flex flex-col"
		>
			<h3 class="text-xl font-semibold mb-4">Edit Bio</h3>
			<form
				method="POST"
				action={`/profile/${userId}?/updateBio`}
				use:enhance
				onsubmit={() => (isOpen = false)}
				class="min-w-[300px] flex flex-col space-y-4"
			>
				<textarea
					name="bio"
					bind:value={newBio}
					class="textarea textarea-bordered w-full h-32 mb-4"
					placeholder="Enter your new bio..."
				></textarea>
				<div class="flex justify-end space-x-2">
					<button type="button" class="btn btn-ghost" onclick={handleCancel}>
						<Icon icon="mdi:close" class="mr-2" />
						Cancel
					</button>
					<button type="submit" class="btn btn-primary">
						<Icon icon="mdi:check" class="mr-2" />
						Save
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
