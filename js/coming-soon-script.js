$(function() {
    // comming count down clock
    $('#clock').countDown({  
        targetDate: {
            'day'   : 17,
            'month' : 4,
            'year'  : 2016,
            'hour'  : 8,
            'min'   : 0,
            'sec'   : 0
        },
        omitWeeks: true
    });
});
