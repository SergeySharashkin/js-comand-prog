const bodyEl = document.body;
const toggleBtn = document.querySelector('.checkbox');

toggleBtn.addEventListener('change', onToggleTheme);

changeThemeFromLocalStorage();
export function onToggleTheme(event) {
    
    if(event.currentTarget.checked){
        localStorage.setItem('theme', 'dark');
        bodyEl.classList.replace('light', 'dark');
    } else {
        bodyEl.classList.replace('dark', 'light');
        localStorage.setItem('theme', '');
    }
}

export function changeThemeFromLocalStorage(){
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        toggleBtn.setAttribute('checked', true);
        bodyEl.classList.replace('light', 'dark');
    } else {
        bodyEl.classList.replace('dark', 'light');
    }
}








