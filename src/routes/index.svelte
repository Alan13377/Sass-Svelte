<script>
	import Header from '../components/Header.svelte';
</script>

<body>
	<div class="contenedor">
		<Header />
		<div class="main-screen">
			<div class="row">
				<div class="col-30 m-9">
					<h3>Comida italiana</h3>
					<h2 class="py-4">Con el mejor sabor.</h2>
					<p class="">Manteniendo las mejores recetas del país de origen</p>

					<div class="row py-4">
						<div class="col">
							<div class="prices w-75 m-auto">
								<div class="prev">$7.90</div>
								<div class="now">$6.90</div>
							</div>
						</div>
						<div class="col">
							<div>
								<a href="/" class="btn btn-cta shadow"> ORDENAR </a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-70">
					<img src="salad.jpg" width="90%" alt="" />
				</div>
			</div>
		</div>
	</div>
</body>

<style lang="scss">
	body {
		background-color: $primary-color;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
