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

// jquery para label dos inputs
$(document).ready(function () {
    const inputs = document.querySelectorAll(".primary-input");

    const handleFocus = ({
        target
    }) => {
        const label = target.previousElementSibling;
        label.classList.remove("text-sm");
        label.classList.remove("top-2/4");
        label.classList.remove("left-3");
        label.classList.add("text-xs");
        label.classList.add("top-0");
        label.classList.add("left-6");
        label.classList.add("border-[1.5px]");
        label.classList.add("border-[#08246c]");
    };

    const handleFocusOut = ({
        target
    }) => {
        if (target.value === "") {
            const label = target.previousElementSibling;
            label.classList.remove("text-xs");
            label.classList.remove("top-0");
            label.classList.remove("left-6");
            label.classList.remove("border-[1.5px]");
            label.classList.remove("border-[#08246c]");
            label.classList.add("text-sm");
            label.classList.add("top-2/4");
            label.classList.add("left-3");
        }
    };

    inputs.forEach((input) => input.addEventListener("focus", handleFocus));
    inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
});