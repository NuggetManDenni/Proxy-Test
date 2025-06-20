$(document).ready(function() {
    $('#proxyForm').submit(function(e) {
        e.preventDefault();
        let url = $('#url').val();
        if (url) {
            window.open('https://www.unrestrictor.net/' + url, '_blank');
        } else {
            alert('Please enter a valid URL.');
        }
    });
});
