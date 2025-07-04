function onClickMenu() {
	const menu = document.getElementById('menu');
	const nav = document.getElementById('nav');
	const menuBg = document.getElementById('menu-bg');
  
	// Alternar las clases necesarias
	menu.classList.toggle('change');
	nav.classList.toggle('change');
	menuBg.classList.toggle('change-bg');
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
	const menuBar = document.getElementById('menu-bar');
	const menu = document.getElementById('menu');
	const nav = document.getElementById('nav');
	const menuBg = document.getElementById('menu-bg');

	// Verificar si el clic fue fuera del menú
	if (!menuBar.contains(event.target) && nav.classList.contains('change')) {
		// Si el menú está abierto, cerrarlo
		menu.classList.remove('change');
		nav.classList.remove('change');
		menuBg.classList.remove('change-bg');
	}
});
