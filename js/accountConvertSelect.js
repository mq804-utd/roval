const accountSingle = '.js-account_select-single'
$(document).ready(function() {
    $(accountSingle).select2({
        width: '100px',
        minimumResultsForSearch : Infinity,
    });
});