const showAlert = (event, circle="circle") => {
    event.stopPropagation();
    
    alert(`CLICKED ${circle} :)`);
}

const displayTag = (event, c) => {
    event.stopPropagation();

    const circle = document.getElementById(c);
    const tagContainer = document.getElementById("tag-container");
    tagContainer.style.display = "block";
    tagContainer.style.backgroundColor = window.getComputedStyle(circle).backgroundColor;

    const tag = document.getElementById("tag");
    tag.innerHTML = `<h4 style="padding-top: 15px">CIRCLE ${c[1]}</h4>`;

}

const hideTag = (event) => {
    event.stopPropagation();
    
    const tagContainer = document.getElementById("tag-container");
    tagContainer.style.display = "none";
}