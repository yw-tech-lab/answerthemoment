/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


const toggleShow = () => {
    document.querySelector("nav").classList.toggle('show-menu');
};

document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener('click', ev => {
        console.log(ev);
        document.querySelector("nav").classList.remove('show-menu');
    })
});
  