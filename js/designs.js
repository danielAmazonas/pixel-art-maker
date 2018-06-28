// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let alturaGrid = $('#inputHeight').val();
let larguraGrid = $('#inputWeight').val();

function makeGrid() {
    $('#pixelCanvas').children().remove('tr');
    for (let x = 0; x < alturaGrid; x++) {
        $('#pixelCanvas').append('<tr></tr>');
    }
    for (let y = 0; y < larguraGrid; y++) {
        $('#pixelCanvas').children().append('<td></td>');
    }
}

$('#inputHeight').focusout(function() {
    alturaGrid = $(this).val();
});

$('#inputWeight').focusout(function() {
    larguraGrid = $(this).val();
});

$('#sizePicker').submit(function() {
    makeGrid();
    return false;
});
