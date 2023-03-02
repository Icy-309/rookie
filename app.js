       const nice = document.querySelector("ul");
        const d = document.querySelector(".burger");
        const hey = document.querySelector("li")
          // how to run the navs 
        d.onclick = function (){
            nice.classList.toggle("ul-active")
            d.classList.toggle("toogle")
            
        };
        // well this is for the animation
       hey.forEach((links, index) => {
         
       });