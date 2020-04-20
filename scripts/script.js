
function myFunction() 
{
    const topNav = document.querySelector("#myTopnav");

    if (topNav.className === "topnav") 
    {
      topNav.className += " responsive";
    } 
    else 
    {
      topNav.className = "topnav";
    }
}
