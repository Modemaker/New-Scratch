function toggle() {
  const Element = document.getElementsByClassName("profile-list")[0]

  if( Element.classList.length == 1 ) {
    Element.className += " hidden"
  } else if( Element.classList.length == 2 ) {
    Element.className = "profile-list"
  }
}