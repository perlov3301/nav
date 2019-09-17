
var a11l,a12l;
 
function a401(a415)
 {
   a415.style.background='lightgray';
   $('#ad043').show();
 };
function a402(a415){a415.style.background='white';};

$(document).ready(function()
 {
  if (Modernizr.localstorage)
    {
      $('#ad041').html('window.localStorage is available');
       a11l=window.localStorage.getItem('how');
       a12l=window.localStorage.getItem('range');
      if(a11l>1)
        {$('#ad042').html('and here are your data')
          $('#ai041').val(a11l);
          $('#ai042').val(a12l);
       ;}
       else{$('#ad042').html('no data in local Storage');};
    }
   else
    {
      $('#ad041').html('no native support for local storage');
    };
;});
$(document).ready(function()
 { $('').click(function(){ ;}); });

$(document).ready(function(){;});


$(document).ready(function()
 {
  $('#aa004,#aa041').on('click',function(){af04();});
   $('#ab041').on('click',function()
     {
      var ach1=document.b4.ai041.validity;
      var ach2=document.b4.ai042.validity;
      var a172=document.getElementById('ad062');
      var a171='here will generate numbers';
       a172.innerHtml=a171;
      if(ach1.valid&ach2.valid)
        {
         $('#ad043').hide();
          a11l=$('#ai041').val();
          a12l=$('#ai042').val();
          window.localStorage.setItem('how',a11l);
          window.localStorage.setItem('range',a12l);
         var a30='setting Data saved successfully';
         var a3='there are '+a11l;
          a3+=' numbers in range between 1 to '+a12l;
         $('#ad041').html(a30);
         $('#ad042').html(a3);
       ;}
       
    ;});//click_ab041
;});//ready



$(document).ready(function()
 {
   
;});

$(document).ready(function()
 {
  $('#aa006,#aa061').on('click',function(){af06();});
   $('#ab061').on('click',function()
     {

      var a13;
      var a130=new Array();
      var i14=a11l;//10
      var i15=a12l;//100
      var i16,i17,a18;

      var aset = new Set();
       i16=0;   
      do
       {
         a13=Math.random()*i15;
         a13=Math.ceil(a13);
        if(aset.has(a13)){;}
         else
          {
           aset.add(a13);
            a130[i16]=a13;
            i17=i16+1;
            a18='#ad064'+i17;
           $(a18).val(a13);
            i16=i16+1;           
         ;};
      ;}
      while(i16<i14);

    ;});//click
;});//ready

$(document).ready(function()
 {
   $("#aa006" ).on("click",function(event, ui)
     {
      $('#ad064').html('');
      var a170='';
       a170+='it will be to generate '+a11l+' numbers';
       a170+='<br/>within the range from 1 to '+a12l;
      $('#ad061').html(a170);

      var i0=0;
      do
       {
        var i1=i0+1;

        var adiv="<div>";
         adiv+="<label for='ad064"+i1+"'> number "+i1+"</label>";
         adiv+="<input type='text' style='font-weight:bold;'";
         adiv+=" name='ad064"+i1+"' id='ad064"+i1+"'/>";
         adiv+="</div>";//input_label
        $('#ad064').append(adiv);        
         i0+=1;
      ;}
      while(i0<a11l);
//      $("#ad064")[0].reset();
//$('[data-role="page"]').trigger('create');
//$('[data-role="page"]').page();
      $('.ui-page').trigger('create');
    ;});//bind
;});//init


function af04()
 {
//  $('#ad041').html('');
//  $('#ad042').html('');
  $('#ad043').show();
  $('#ai041').val(a11l);
  $('#ai042').val(a12l);
;};

function af06()
 {
  $('#ad061').html('');
  $('#ad062').html('');
  $('#ad064').html('');
  $('#ad063').show();

//  $('.ui-page').trigger('create');
;};


