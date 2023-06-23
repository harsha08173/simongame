document.querySelector('.gm').classList.add('start')


var a = [];
var c = 0;
var target = [];
var r = 0;

$('button').click(function()
    {   
        var n =this.classList[0][3];
        add_animation_and_sound('.btn'+n);
        a.push(Number(n));
        console.log(JSON.stringify(a)==JSON.stringify(target));
        if(JSON.stringify(a)==JSON.stringify(target))
        {
            console.log('1');
            level = level+1;
            a = [];
            $('h2').text('Level '+level);
            var value = getran();
            target.push(value);
            console.log(target)
            c = 0;
        }
        else if(a.length!= target.length && (JSON.stringify(target.slice(0,a.length))==JSON.stringify(a)))
        {
            console.log('Playing Good');
        }
        else
        {
            a = [];
            b = [];
            var gmover =new Audio('gameover.wav');
            $('body').css('background-color','red');
            for(var i = 0;i<4;i++)
            {
            document.querySelectorAll('button')[i].classList.add('gameover');
            }
            setTimeout(() => {
                gmover.play();
            }, 700);
            console.log('Overr');
            $('h2').text('Game Over!!');
            $('.gm').text('Press X to restart');
            document.querySelector('.gm').classList.remove('start')

            c=0;
            r = 1;
        }
    }   
)
var notstarted= 0;
var blink_speed = 500; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.querySelector('h2');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);
var target_list = [];
var game = 1;
var level = 1;


$(document).keydown(function()
{   
    $('h2').text('Level 1');
    for(var i = 0;i<4;i++)
    {
    $('body').css('background-color','#22A699');
    }
    if(c==0)
    {
        if(r==1)
    { 
    document.querySelector('.gm').classList.add('start')
    }
    c = 1;
    var val = getran();
    target.push(val);
    }
    else
    {
        console.log('Key press Disabled');
    }
})



function getran()
{
    var num = Math.floor(Math.random()*4)+1;
    var s = '.btn'+num
    console.log(s);
    add_animation_and_sound(s);
    return(num)
    
}

function aud()
{
    var audio = new Audio('./click.mp3');
    audio.play();
}

function add_animation_and_sound(s)
{
    document.querySelector(s).classList.add('onclick');
    aud();
    setTimeout(() => {
        document.querySelector(s).classList.remove('onclick');
    }, 1000);
}