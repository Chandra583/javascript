// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

//create element

const h1 = document.createElement("h1");
const body = document.body;
h1.textContent = "heloo";
h1.classList.add = "Greeet";
console.log(h1);
//append child
body.appendChild(h1);
