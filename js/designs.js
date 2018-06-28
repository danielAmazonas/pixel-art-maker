// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let alturaGrid = $('#inputHeight').val(); // altura inicial
let larguraGrid = $('#inputWeight').val(); // largura inicial
let cor = '#000000'; // cor inicial

/**
 * @description Funçao criar tabela
 */
function makeGrid() {
    $('#pixelCanvas').children().remove('tr');
    for (let x = 0; x < alturaGrid; x++) {
        $('#pixelCanvas').append('<tr></tr>');
    }
    for (let y = 0; y < larguraGrid; y++) {
        $('#pixelCanvas').children().append('<td></td>');
    }
}

/**
 * @description Pegar o valor da altura
 */
$('#inputHeight').focusout(function() {
    alturaGrid = $(this).val();
});

/**
 * @description Pegar o valor da largura
 */
$('#inputWeight').focusout(function() {
    larguraGrid = $(this).val();
});

/**
 * @description Ação ao botão para gerar a tabela
 */
$('#sizePicker').submit(function() {
    makeGrid();
    return false;
});

/**
 * @description Ação de setar a cor
 */
document.getElementById('colorPicker').addEventListener('input', function() {
    cor = $(this).val();
}, false);

/**
 * @description Ação de pintar a tabela com a cor definida
 */
$('#pixelCanvas').on('click', function(e) {
    $(e.target).css('background-color', cor);
});