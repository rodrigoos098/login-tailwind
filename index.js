// config do tailwind pra tratar o darkmode como classe
tailwind.config = {
    darkMode: 'class',
}

// se lembra do último estado do darkmode, ou usa o tema do pc
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}