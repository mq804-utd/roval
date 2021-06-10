function showSearch() {
    const searchInput = document.getElementById("search__input");
    const searchBlock = document.getElementById("bar__search")
    console.log(searchInput.style)
    if (!searchInput.style.visibility || searchInput.style.visibility === "hidden") {
        searchInput.style.visibility = "visible";
        searchBlock.style.right = "119px";
        searchBlock.style.transition = "right .6s easy"
    } else {
        searchInput.style.visibility = "hidden";
        searchBlock.style.right = "-87px"
    }
}