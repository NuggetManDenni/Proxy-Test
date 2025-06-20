$(document).ready(function() {
    $('#proxyForm').submit(function(e) {
        e.preventDefault();
        let url = $('#url').val();
        if (url) {
            window.open('https://https://gointospace.app/' + url, '_blank');
        } else {
            alert('Please enter a valid URL.');
        }
    });
});
