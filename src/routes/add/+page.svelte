<script>
	import { enhance } from '$app/forms';
	import { DateInput } from 'date-picker-svelte';
	let date = new Date();
</script>

<div class="p-2 w-full">
	<form method="post" use:enhance>
		<div class="w-full">
			<DateInput
				bind:value={date}
				format="yyyy-MM-dd"
				closeOnSelection={true}
				placeholder={new Date()}
			/>
			<input type="text" hidden name="createdDate" bind:value={date} />
		</div>
		<div class="mt-10 text-gray-200 flex flex-col gap-y-9">
			<div class="w-full">
				<label for="title">Title</label>
				<div class="mt-2 w-full">
					<input
						type="text"
						name="title"
						id="title"
						class="w-full p-2 focus:outline-none bg-slate-900"
						placeholder="Title...."
					/>
				</div>
			</div>

			<div class="w-full">
				<label for="content">Content</label>
				<div class="mt-2">
					<textarea
						id="content"
						name="content"
						rows="10"
						class="w-full p-2 focus:outline-none bg-slate-900"
					/>
				</div>
			</div>

			<button class="bg-slate-900 py-3 w-1/2 self-center" type="submit">Add Note</button>
		</div>
	</form>
</div>

<style>
	div {
		--date-picker-background: #1b1e27;
		--date-picker-foreground: #f7f7f7;
		--date-input-width: '';
	}
</style>
