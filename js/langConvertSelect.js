const basicSingle = '.js-lang_select-single'
function formatState (state) {
    if (!state.id) return state.text
    const baseUrl = "icons/flags";
    return $('<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" style="width: 100%"/> ' + state.text + '</span>')
}
$(document).ready(function() {
    $(basicSingle).select2({
        width: '42px',
        templateResult: formatState,
        templateSelection: formatState,
        minimumResultsForSearch : Infinity,
    });
});