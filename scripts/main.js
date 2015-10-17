(function() {
    var attack, defense, base, multiple, modifer, damage, statsNumber;
    $('.calc-button').click(function() {
        statsNumber = $(this).data("stats");
        attack = parseInt($('#attack' + statsNumber).val());
        defense = parseInt($('#defense' + statsNumber).val());
        base = parseInt($('#base' + statsNumber).val());
        multiple = parseFloat($('#multiple' + statsNumber).val());
        modifier = multiple;
        if (randomit.generateNumber(1, 16) === 1) {
            modifier *= 1.5;
        }
        modifier *= randomit.generateNumber(85, 100)/100;
        damage = ((210/250) * (attack/defense) * base + 2) * modifier;

        $('#damage' + statsNumber).text(damage);
    });

    $('#random-button').click(function() {
       $('#number').text(randomit.generateNumber(1, 100)); 
    });
})();
