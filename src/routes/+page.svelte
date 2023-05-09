<script>
	import { DatePicker } from 'date-picker-svelte';
	import { format } from 'date-fns';
	let date = new Date();
</script>

<div class="p-2 flex flex-col md:flex-row gap-10">
	<div class="flex flex-col justify-center items-center gap-4">
		<p class="font-light text-gray-300">Selected Date: {format(date, 'yyyy-MM-dd')}</p>
		<DatePicker
			bind:value={date}
			locale={{
				weekStartsOn: 0
			}}
		/>
	</div>
	<div class="w-full">
		<div class="grid grid-cols-3 gap-4 text-gray-300">
			<div class="bg-slate-900 px-2 py-3">Card</div>
			<div class="bg-slate-900 px-2 py-3">Card</div>
			<div class="bg-slate-900 px-2 py-3">Card</div>
			<div class="bg-slate-900 px-2 py-3">Card</div>
			<div class="bg-slate-900 px-2 py-3">Card</div>
			<div class="bg-slate-900 px-2 py-3">Card</div>
		</div>
	</div>
</div>

<style>
	div {
		--date-picker-background: #1b1e27;
		--date-picker-foreground: #f7f7f7;
	}
</style>
