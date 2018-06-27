// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let alturaGrid = $('#inputHeight').val();
let larguraGrid = $('#inputWeight').val();

function makeGrid() {



}

$('#inputHeight').focusout(function() {
    alturaGrid = $(this).val();
});

$('#inputWeight').focusout(function() {
    larguraGrid = $(this).val();
});
