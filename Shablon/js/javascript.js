

$('.mini-task').on('click', function(){
    var numberTask = $('.mini-task').length - 1;
    for(var i = 0; i <= numberTask; i++){
        $('.mini-task')[i].dataset.id = i;
    }
    if(this.className == 'col-3 mini-task'){
        for(var i=0; i <= numberTask; i++){
            if(i == Number(this.dataset.id)){
                this.className = 'col-12 mini-task';
            }else{
                $('.mini-task')[i].className = 'displayNone mini-task';
            }
        }
    }else{
        for(var i=0; i <= numberTask; i++){
            $('.mini-task')[i].className = 'col-3 mini-task';
        }
        // this.className = '';
    }
});