(function() {
    var attack, defense, base, modifier, damage;
    $('.calc-button').click(function() {
        var statsNumber = $(this).data("stats");
        attack = parseInt($('#attack' + statsNumber).val());
        defense = parseInt($('#defense' + statsNumber).val());
        base = parseInt($('#base' + statsNumber).val());
        modifier = parseFloat($('#modifier' + statsNumber).val());
        damage = (attack/defense) * base * modifier;

        $('#damage' + statsNumber).text(damage);
    });

    $('#random-button').click(function() {
       $('#number').text(randomit.generateNumber(1, 100)); 
    });
})();
