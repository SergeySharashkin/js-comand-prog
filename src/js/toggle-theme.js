const bodyEl = document.body;
const toggleBtn = document.querySelector('#slider');

toggleBtn.addEventListener('change', onToggleTheme);
changeThemeFromLocalStorage();

export function onToggleTheme(event) {
    
    if(event.currentTarget.checked){
        bodyEl.classList.replace('dark', 'light');
        localStorage.setItem('theme', '');
    } else {
        
        localStorage.setItem('theme', 'dark');
        bodyEl.classList.replace('light', 'dark');
    }
}

export function changeThemeFromLocalStorage(){
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        toggleBtn.checked = false;
        bodyEl.classList.replace('light', 'dark');
    } else {
        bodyEl.classList.replace('dark', 'light');
    }
}








