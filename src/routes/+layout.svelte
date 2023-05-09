<script>
	import '../app.css';
</script>

<div class="max-w-5xl mx-auto">
	<nav class="px-2 py-4">
		<ul class="flex justify-between text-xl text-gray-300">
			<li><a href="/">Notes App</a></li>
			<div class="flex justify-evenly gap-12">
				<li><a href="/add">Add</a></li>
				<li><a href="/about">About</a></li>
			</div>
		</ul>
	</nav>
	<slot />
</div>
