    //I think this is the hardest part of this small project!!
    $(document).ready(function(){
        $('.title').click(function(event){
            if ($(event.target).is('i')) {
                var conteiner_class = event.target.className.split(/\W+/).pop();
                $('body').toggleClass(conteiner_class);    //I think this is the easiest way of setting class to body.
                switch(event.target.id){    //Using of the switch function limited me from using too many click functions.
                    case '1':
                        if ($('body').hasClass('alt')) {
                            $('body').removeClass('alt');
                        }
                        break;
                    case '2':
                        if ($('body').hasClass('minimize')) {
                            $('body').removeClass('minimize');
                        }
                        break;
                    case '3':
                    if (confirm('Are you sure ?')) {
                        // Save it!
                        $('body .add_conteiner').removeClass('lose_add_conteiner');
                        $('body').removeClass('alt');
                        $('body').removeClass('minimize');
                    }else {
                        // Do nothing!
                        //event.preventDefault();
                        $('body').removeClass('times');
                    }
                    break;
                }
            }else{
                $('body').toggleClass('minimize');
                    if ($('body').hasClass('alt')) {
                        $('body').removeClass('alt');
                    }
                }
        });
    });
    //One way to swap two containers.
    $(document).ready(function(){
        $('.add_conteiner i').click(function(){
            $('body').removeClass('times');
            $('body .add_conteiner').addClass('lose_add_conteiner');
        })
    });
    