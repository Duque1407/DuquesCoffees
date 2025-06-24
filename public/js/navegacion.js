function onClickMenu() {
	const menu = document.getElementById('menu');
	const nav = document.getElementById('nav');
	const menuBg = document.getElementById('menu-bg');
  
	// Alternar las clases necesarias
	menu.classList.toggle('change');
	nav.classList.toggle('change');
	menuBg.classList.toggle('change-bg');
  }
  