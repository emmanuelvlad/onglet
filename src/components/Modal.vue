<template>
	<div class="fixed z-10 inset-0 overflow-y-auto">
		<div class="flex text-black items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div
				class="fixed inset-0 transition-opacity"
				aria-hidden="true">
				<div
					class="absolute inset-0 bg-black opacity-75"
					@click="$emit('close')"></div>
			</div>

			<span
				class="hidden sm:inline-block sm:align-middle sm:h-screen"
				aria-hidden="true">&#8203;</span>

			<div
				class="inline-block align-bottom bg-dark text-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-headline">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Modal",
};
</script>
