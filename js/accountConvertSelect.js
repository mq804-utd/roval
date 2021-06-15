const accountSingle = '.js-account_select-single'
function accountFormatState (state) {
    return $('<span style="line-height: 35px;">' + state.text + '</span>')
}
$(document).ready(function() {
    $(accountSingle).select2({
        width: '80px',
        templateSelection: accountFormatState,
        minimumResultsForSearch : Infinity,
    });
});