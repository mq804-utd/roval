//test for iterating over child elements
const langArray = [];
$('.vodiapicker option').each(function() {
    console.log('here')
    const img = $(this).attr("data-thumbnail");
    const text = this.innerText;
    const value = $(this).val();
    const item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    console.log(item)
    langArray.push(item);
})

$('#a').html(langArray);

let btnSelect = '.btn-select'
//Set the button value to the first el of the array
$(btnSelect).html(langArray[0]);
$(btnSelect).attr('value', 'en');

//change button stuff on click
$('#a li').click(function(){
    const img = $(this).find('img').attr("src");
    const value = $(this).find('img').attr('value');
    const text = this.innerText;
    const item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $(btnSelect).html(item);
    $(btnSelect).attr('value', value);
    $(".b").toggle();
});

$(".btn-select").click(function(){
    $(".b").toggle();
});

//check local storage for the lang
const sessionLang = localStorage.getItem('lang');
let langIndex;
if (sessionLang){
    //find an item with value of sessionLang
    langIndex = langArray.indexOf(sessionLang);
    $(btnSelect).html(langArray[langIndex]);
    $(btnSelect).attr('value', sessionLang);
} else {
    langIndex = langArray.indexOf('ch');
    // console.log(langIndex);
    $(btnSelect).html(langArray[langIndex]);
    // $(btnSelect).attr('value', 'en');
}