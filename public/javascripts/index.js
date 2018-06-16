$(document).ready(function() {
    fillData({title: 'hello world'});
    function fillData(data) {
        let template = $('#tabTemplate').html();
    let templateFunction = Handlebars.compile(template);
    let html = templateFunction(data);
    $('#v-pills-tabContent').html(html);
    }
    // alert('hello world');
    $('.left-side .nav-link').each(function(value, key) {
        $(this).click(function() {
            fillData({title: $(this).text()})
        });
    });
});