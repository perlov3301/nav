  var in10=0;
  
    var now0 = new Date();
    var ano1=now0.getDay();
    var ano2=now0.getHours();
    var ano3=now0.getMinutes();
    var ano4=now0.getSeconds();
    var adm,ads;
    var asec;
  
 function a301()
         {
          a2date();
          $( "div.a401" ).removeClass('active');
          $('div.a402>img').remove();
          $('.a401').each(function() { $(this).removeAttr('rel');});
    
           j11=0;
        var j12=0;
        var i11,i12;
        var a8;
        var a88;
        var mima=new Array();
        var mimm=new Array();
        var mim8=new Array();
        var a188=new Array();
        var i13=new Array();
        var a197=new Array();
        var al=new Array();
     
        var ar1=new Array();
        var ar2=new Array();
        for(i11=0;i11<16;i11++)
          {  
            a88=a150[i11];
            a188[i11]=a88.toString();
           if(a88<10){a188[i11]='0'+a188[i11];};
           if(a88<=8){mima[i11]='a'+a188[i11]}
           else
            {
              a8=a88-8;
              mim8[i11]=a8.toString(); 
              mima[i11]='a0'+mim8[i11];
           ;};         
              mimm[i11] ="<img src='a3"+a188[i11]+".png'></img>" ;  
            $( a199[i11] ).append(mimm[i11]); 
             ar1[i11] = $(adiv[i11]).attr('rel');
  console.log('rel1='+ar2[i11]);
           $( adiv[i11] ).attr('rel',mima[i11]);
            ar2[i11] = $(adiv[i11]).attr('rel');
  console.log('rel2='+ar2[i11]);
       ;};/*for*/
     a312();     
 ; };/*301*/

function a309()
 {
   var a5=206-1.5*asec-in10;
   var a50='IQ='+a5.toString();
       $('#ai17').val(a50);
   var a33;
    var i31;
    var i35=nm;
    var i36;
    var i37;
    var i38;
    j11=0;
    a91=0;
    in10=0;
    $( "div.a401" ).removeClass('active');
    $('div.a402>img').remove();
    $('.a401').each(function() { $(this).removeAttr('rel'); });
    for(i36=0;i36<16;i36=i36+1)
      {
        a150[i36]=0;
        do
         {
           i37=0;
           a33=Math.random()*i35;
           a33=Math.ceil(a33);
          for(i38=0;i38<i36;i38=i38+1)
           {
            if(a33==a150[i38]){i37=1;}
          ;}/*for*/
        ;}/*do*/
       while(i37==1);
       a150[i36]=a33;      
     ;};/*for*/
;};/*309*/

$(document).ready(function()
 {
   $('#ad001').buttonMarkup({ corners: true });
   $('#ad001').bind('click',function()
      {    
       /*a301*/
          a2date();
          $( "div.a401" ).removeClass('active');
          $('div.a402>img').remove();
          $('.a401').each(function() { $(this).removeAttr('rel');});
    
           j11=0;
        var j12=0;
        var i11,i12;
        var a8;
        var a88;
        var mima=new Array();
        var mimm=new Array();
        var mim8=new Array();
        var a188=new Array();
        var i13=new Array();
        var a197=new Array();
        var al=new Array();
     
        var ar1=new Array();
        var ar2=new Array();
        for(i11=0;i11<16;i11++)
          {  
            a88=a150[i11];
            a188[i11]=a88.toString();
           if(a88<10){a188[i11]='0'+a188[i11];};
           if(a88<=8){mima[i11]='a'+a188[i11]}
           else
            {
              a8=a88-8;
              mim8[i11]=a8.toString(); 
              mima[i11]='a0'+mim8[i11];
           ;};         
              mimm[i11] ="<img src='a3"+a188[i11]+".png'></img>" ;  
            $( a199[i11] ).append(mimm[i11]); 
             ar1[i11] = $(adiv[i11]).attr('rel');
  console.log('rel1='+ar2[i11]);
           $( adiv[i11] ).attr('rel',mima[i11]);
            ar2[i11] = $(adiv[i11]).attr('rel');
  console.log('rel2='+ar2[i11]);
       ;};/*for*/
     a312();     

    ;});/*bind*/
;});/*ready*/

$(document).ready(function()
 {
   $('#ad1031').bind('click',function()
     {      
       var a5=206-1.5*asec-in10;
       var a50='IQ='+a5.toString();
       $('#ai17').val(a50);
       var a33;
       var i31;
       var i35=nm;
       var i36;
       var i37;
       var i38;
        j11=0;
       a91=0;
       in10=0;
     $( "div.a401" ).removeClass('active');
     $('div.a402>img').remove();
     $('.a401').each(function() { $(this).removeAttr('rel'); });
     for(i36=0;i36<16;i36=i36+1)
       {
         a150[i36]=0;
         do
          {
            i37=0;
            a33=Math.random()*i35;
            a33=Math.ceil(a33);
           for(i38=0;i38<i36;i38=i38+1)
            {
             if(a33==a150[i38]){i37=1;}
           ;}/*for*/
         ;}/*do*/
        while(i37==1);
        a150[i36]=a33;      
      ;};/*for*/
    ;});/*bind*/
;});/*ready*/

   
function a2date() 
  {
     in10=0;
     now0 = new Date();
     ano1=now0.getDay();
     ano2=now0.getHours();
     ano3=now0.getMinutes();
     ano4=now0.getSeconds();
    
    var astx;
        astx = 'time in sec:0';
    var anow=astx+'&nbsp;&nbsp; touch:0</bold>';
    $('#time').html(anow);
  }; 
    
function a3date() 
  {
     in10=in10+1;
    var ain1=in10.toString();
    var now5 = new Date();
    var ano6=now5.getMinutes();
    var ano7=now5.getSeconds();
    
      adm=ano6-ano3;
      ads=ano7-ano4;
      asec=60*adm+ads;
    var astx;
        astx = 'time in sec:'+asec;
    var anow=astx+'&nbsp;&nbsp; touch:</bold>'+ain1;
    $('#time').html(anow);
  }; 
 var j11=0;
 var a91=0;
 var a199=new Array();
 var a198=new Array();
 var clxy=new Array(); 
 var a150=new Array();
 var adiv=new Array();
    var ar0=new Array();
    var ad0=new Array();
 var nm=16;

 $(document).ready(function()
  { 
    var i11,i12;
    var i13=new Array();
    
    var mdiv=new Array();
    var tdiva=new Array();
    var tdivm=new Array();
    var anim="<img src='andr0.png'></img>" ;
    var mnim="<img src='a302.png'></img>" ;

    for(i11=0;i11<16;i11++)
      {
        i12=i11+1;
        i13[i11]=i12.toString();
        if(i12<10){i13[i11]='0'+i13[i11];};
        a199[i11]='#a5'+i13[i11];
        a198[i11]='#a6'+i13[i11];
        clxy[i11]='rc'+i13[i11];

        tdiva[i11]= "<div/>";

        adiv[i11]= $( tdiva[i11] );               

        $(adiv[i11]).addClass(clxy[i11]);
        $(a199[i11]).addClass(clxy[i11]);
 
        $( adiv[i11] ).attr('id',a198[i11]);
        $( adiv[i11] ).attr('rel','a0');

        $(adiv[i11]).append(anim);

        $(adiv[i11]).addClass('a401');
        $(a199[i11]).addClass('a402');
     
        $( "#a203" ).append( adiv[i11]);

      }
    var a33;
    var i31;
    var i35=nm;
    var i36;
    var i37;
    var i38;
    a3date()
    for(i36=0;i36<16;i36=i36+1)
      {
        a150[i36]=0;
        do
         {
          i37=0;
          a33=Math.random()*i35;
          a33=Math.ceil(a33);
          for(i38=0;i38<i36;i38=i38+1)
           {
            if(a33==a150[i38]){i37=1;};
          ;}
        ;}
       while(i37==1);
       a150[i36]=a33;
console.log(i36+' '+a150[i36]);
     ;};
   $( "div.a401" ).on(
    {
     mouseenter: function()
      {
       if($(this).hasClass("active")){console.log('in');}
        else
           {           
             a3date();
            $( this ).addClass( "inside" );
           }  
     ;},
     mouseleave:function() {$(this).removeClass("inside");}
    })/*on*/   
  ;});
   

function a312() 
 {   
  j11=0;
  a91=0;
//var ar0=new Array();
//var ad0=new Array();

  var i7,i71;
  var a7=new Array();
  var a71=new Array();
  var a3div1=new Array();
  var a3div2=new Array();

   $( "div.a401" ).on(
     {
       click: function()
        {
          console.log('j11='+j11);
          console.log('ad0'+ad0[j11]);
          ad0[j11]=$(this).attr('id');
          var a101=$( this ).hasClass( "active" );
   if(!(ad0[j11]==ad0[j11-1])&&!(a101))
    {
     var a9=0;
           a91=0;         
          $('.active').each(function(){a91=a91+1;});
          console.log('l='+a91);
          a9=a91%2;
          if(a9==0)
            {
              $( this ).addClass( "active" );
              j11=j11+1;
              ar0[j11]=$(this).attr('rel');
              ad0[j11]=$(this).attr('id');

              a7[j11]=ad0[j11].slice(-2);
              i7=parseInt(a7[j11], 10);
              i71=i7-1;
              a3div1[j11]=adiv[i71];
           ;}
          else
            {
              $( this ).addClass( "active" );
              j11=j11+1;
              ar0[j11]=$(this).attr('rel');
              ad0[j11]=$(this).attr('id');

              a7[j11]=ad0[j11].slice(-2);
              i7=parseInt(a7[j11], 10);
              i71=i7-1;
              a3div1[j11]=adiv[i71];
                if(!(ar0[j11]==ar0[j11-1]))
                  {
                     ($( a3div1[j11]).delay(5800).removeClass( "active" ));
            ( $( a3div1[j11-1] ).delay(5800).removeClass( "active" ));
                 ;}
           ;}
   ;}

          
       ;},
       mouseenter: function() 
        {

       ;},
        mouseleave: function()  {;}
     });  


;}


