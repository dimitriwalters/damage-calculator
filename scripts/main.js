(function() {
    var attack, defense, base, modifier, damage;
    $('#calc-button').click(function() {
        attack = parseInt($('#attack').val());
        defense = parseInt($('#defense').val());
        base = parseInt($('#base').val());
        modifier = parseFloat($('#modifier').val());
        damage = (attack/defense) * base * modifier;

        $('#damage').text(damage);
    });

    $('#random-button').click(function() {
       $('#number').text(randomit.generateNumber(1, 100)); 
    });
})();
