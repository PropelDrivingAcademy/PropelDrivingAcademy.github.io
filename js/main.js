// script del menu responsive
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })

        nav.addEventListener('click', e => {
            let el = e.target
            if(el.tagName == 'A'){
                nav.classList.toggle('show')
            }
        })
    }

}

showMenu('navbar-menu-mobile','navbar-container')