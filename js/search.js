function showSearch() {
    const searchInput = document.getElementById("search__input");

    if (searchInput.style.visibility === 'hidden' || !searchInput.style.visibility) {
        searchInput.style.width = '180px'
        searchInput.style.visibility = 'visible'
    } else {
        searchInput.style.width = '0'
        searchInput.style.visibility = 'hidden'
    }
}