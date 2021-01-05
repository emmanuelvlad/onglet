<template>
	<Modal
		v-if="active"
		@close="close">
		<div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			<div>
				<p class="text-comment">Name</p>
				<div class="mt-1">
					<input
						v-model="cUsername"
						class="bg-white text-dark font-medium px-2 py-1 rounded-sm"
						type="text">
				</div>
			</div>

			<div class="mt-3">
				<p class="text-comment">Links</p>

				<div class="mt-1">
					<template v-for="(link, index) in cLinks">
						<div
							:key="'option-link-' + index"
							class="flex justify-between">
							<span>{{ link.name }}</span>
							<span>{{ link.url }}</span>
							<button
								class="text-red underline px-1 py-0-5"
								@click="removeLink(index)">
								remove
							</button>
						</div>
					</template>
				</div>
				<div class="mt-2">
					<div class="flex justify-between">
						<div>
							<input
								v-model="newLinkName"
								class="bg-white text-dark font-medium px-2 py-1 rounded-sm"
								placeholder="name"
								type="text">
						</div>
						<div>
							<input
								v-model="newLinkUrl"
								class="bg-white text-dark font-medium px-2 py-1 rounded-sm"
								placeholder="url"
								type="text">
						</div>
						<div class="justify-self-end">
							<button
								class="bg-cyan text-black rounded-sm px-2 py-1"
								@click="addLink">
								Add link
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-7 text-right">
				<button
					class="bg-current text-white rounded font-semibold px-4 h-7 text-base mr-4"
					@click="close">
					Cancel
				</button>
				<button
					class="bg-green text-black rounded font-semibold px-4 h-7 text-base"
					@click="save">
					Save
				</button>
			</div>
		</div>
	</Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
	name: "Options",

	components: { Modal },

	props: {
		active: {
			type: Boolean,
			required: true,
		},
	},

	data() {
		return {
			username: undefined,
			links: undefined,
			newLinkName: null,
			newLinkUrl: null,
		};
	},

	computed: {
		cUsername: {
			get() {
				return this.username ?? this.$store.state.username;
			},

			set(value) {
				this.username = value;
			},
		},

		cLinks: {
			get() {
				return this.links ?? this.$store.state.links;
			},

			set(value) {
				this.links = value;
			},
		},
	},

	methods: {
		close() {
			this.$emit("update:active", false);
		},

		addLink() {
			if (!this.newLinkName || !this.newLinkUrl) return;
			const newLinks = [...this.cLinks];
			newLinks.push({ name: this.newLinkName, url: this.newLinkUrl });
			this.cLinks = newLinks;
			this.newLinkName = null;
			this.newLinkUrl = null;
		},

		removeLink(index) {
			const newLinks = [...this.cLinks];
			newLinks.splice(index, 1);
			this.cLinks = newLinks;
		},

		async save() {
			this.$store.dispatch("set", { username: this.cUsername, links: this.cLinks });
			this.close();
		},
	},
};
</script>
