<template>
	<div class="h-screen w-full bg-dark text-white">
		<template v-if="$store.state.loaded">
			<Options :active.sync="optionsModal" />

			<div class="container mx-auto h-full flex flex-col justify-between py-6">
				<div class="flex-1">
					<div class="grid grid-cols-12 gap-4">
						<div class="col-span-4 text-left">
						<!-- left -->
						</div>
						<div class="col-span-4 text-center">
						<!-- middle -->
						</div>
						<div class="col-span-4 text-right">
							<div class="flex justify-end">
								<template v-for="(link, index) in $store.state.links">
									<div
										:key="'link-' + index"
										class="px-2">
										<a
											class="text-base font-medium"
											:href="link.url">{{ link.name }}</a>
									</div>
								</template>
							</div>
						</div>
					</div>
				</div>

				<div class="flex-1 flex justify-center">
					<p class="text-7xl font-medium self-center -mt-9 tracking-tighter">
						Hello, {{ $store.state.username }} 👋
					</p>
				</div>

				<div class="flex-1 flex">
					<div class="self-end w-full">
						<div class="grid grid-cols-12 gap-4">
							<div class="col-span-4 text-left">
								<a
									class="text-current"
									href="https://github.com/emmanuelvlad/onglet">github</a>
							</div>
							<div class="col-span-4 text-center text-comment">
								onglet {{ chrome.version }}
							</div>
							<div class="col-span-4 text-right">
								<span
									class="cursor-pointer text-comment"
									@click="optionsModal = !optionsModal">Options</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import Options from "@/components/Options.vue";

export default {
	name: "App",

	components: { Options },

	created() {
		this.$store.dispatch("firstLoad");
	},

	data() {
		return {
			optionsModal: false,
			chrome: chrome.runtime.getManifest(),
		};
	},

	methods: {
		async name() {
			return await this.$get("name");
		},
	},
};
</script>
