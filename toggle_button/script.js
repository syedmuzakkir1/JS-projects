
        let toggle= document.querySelector('.toggle')

        toggle.addEventListener('click', change)

        function change(){
            document.body.classList.toggle('body_black')
            toggle.classList.toggle('right')
            
            if(toggle.innerHTML=='ON'){
                toggle.innerHTML='OFF'
            }
            else{
                toggle.innerHTML='ON'
            }
            
        }
