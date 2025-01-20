// Developed by: Iva Doycheva

//Scrolls to top of page smoothly
const toTop =() => window.scrollTo({top:0, behavior: 'smooth'});

//JS code that makes a scroll animation that hides all elements with the 'hidden' class, but when scrolled to adds the class 'show' tthat makes them visible, which achieves a fade effect on scroll. Both classes are defined in CSS.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));