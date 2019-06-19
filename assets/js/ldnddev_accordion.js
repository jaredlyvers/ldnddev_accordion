var ldnddev_accordion__header = document.getElementsByClassName("ldnddev-accordion__header");
var i;

for (i = 0; i < ldnddev_accordion__header.length; i++) {
    ldnddev_accordion__header[i].addEventListener("click", function() {        
        this.parentNode.classList.toggle("-active");
        this.classList.toggle("-active");
        var copy = this.nextElementSibling;    
        if (copy.style.maxHeight){
            copy.style.maxHeight = null;
        }
        else {
            copy.style.maxHeight = copy.scrollHeight + "px";      
        } 
    });
}