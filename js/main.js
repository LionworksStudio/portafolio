
// Definir las traducciones para los textos del menú
const translations = {
    es: {
      home: "Inicio",
      about: "Sobre Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    en: {
      home: "Home",
      about: "About me",
      services: "Services",
      contact: "Contact",
    }
  };
  
  // Seleccionar elementos del DOM
  const languageSelector = document.getElementById('language-selector');
  const menuLinks = document.querySelectorAll('#menu-list a');
  
  // Función para cambiar el idioma
  function changeLanguage(language) {
    menuLinks.forEach(link => {
      const key = link.getAttribute('data-lang');
      link.textContent = translations[language][key];
    });
  }
  
  // Escuchar el cambio en el selector de idioma
  languageSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
  });
  
  // Opcional: cambiar el idioma por defecto basado en el navegador
  const defaultLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
  languageSelector.value = defaultLanguage;
  changeLanguage(defaultLanguage);
  