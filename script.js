window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });

var menuButton = document.querySelector(".burger-menu");
var menuList = document.querySelector(".navigation-list");

menuButton.addEventListener('click', function(e)
{
    e.preventDefault();
    menuList.classList.toggle('show');
});