import { clearBtn } from "./DOM-elements";

export function clear() {
    clearBtn.addEventListener('click', function(){
        let oldContainer = document.querySelector('.result-container');
        let inputDeleted = document.getElementById('user-input');
        inputDeleted.value = ''
        inputDeleted.style.border = '2px solid green';
    
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        setTimeout(function(){
            if (oldContainer) {
                oldContainer.remove();
            };
        }, 500)
    })
}
