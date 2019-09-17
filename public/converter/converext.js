$(document).ready(function()
 {
   
   $('').bind('click',function()
    {        ;});
;});
$(document).ready(function()
 {
;});
$(document).ready(function()
 {
;});

//$(document).ready(function(){$('#ad001').hide();});

$(document).ready(function()
 {
   $("[type='reset']").bind('click',function()
     {$('input[type=number]').val('');k1=0;});  
   $('a').bind('click',function()
     {$('input[type=number]').val('');k1=0;});
;});
var k1=0;
function a105(a16)
 {
  var a18=1000;
  var a17=a16-Math.trunc(a16);
   a17=Math.round(a18*a17)/a18;
  return a17+Math.trunc(a16);
;}


$(document).ready(function()
 {
  $('#a310').on('focus',function(){$('#a320').val('');k1=1;}); 
  $('#a320').on('focus',function(){$('#a310').val('');k1=2;});
/* 
 //  $('#a310').off('focus',a102(this)); 
 //  $('#a320').off('focus',a102(this));    
 //  $('#a310').on('input',function(){k1=1;});
 //  $('#a320').on('input',function(){k1=2;});

   $('#a204').bind('click',function()
      {
        $('#a310').val('');
        $('#a320').val('');
     ;});
*/
   $('#a203').bind('click',function()
     {
      
      if(k1==1)
       {
        var ach1=document.b1.a310.validity;
        if(ach1.valid)
          {
           var a11=parseFloat(document.b1.a310.value); //miles
           var a13=a11/0.62137;    //km
            document.b1.a320.value=a105(a13);
//       document.b1.a320.value=a13;
//    return document.b1.a320.value;
         ;}//if
         else{alert('number isnot valid');};
      ;}//if
     if(k1==2)
      {
       var ach2=document.b1.a320.validity;
       if(ach2.valid)
        {
         var a11=parseFloat(document.b1.a320.value); //km
         var a13=a11*0.62137;    //miles
          document.b1.a310.value=a105(a13);
 //         document.b1.a310.value=a13;
 //      return document.b1.a310.value;
       ;}
       else{alert('number isnot valid');};
  ;}
       
    ;});//click
;});//ready


function a100() 
 {
  if(k1==1)
   {
    var a11=parseFloat(document.b1.a310.value); //miles
    var a13=a11/0.62137119;                       //km
    document.b1.a320.value=a105(a13);
    return document.b1.a320.value;
  ;}
  if(k1==2)
   {
    var a11=parseFloat(document.b1.a320.value); //km
    var a13=a11*0.62137;                           //miles
    document.b1.a310.value=a105(a13);
    return document.b1.a310.value;
  ;}
;}
function a101(a15)
 {a15.style.background='lightgray';
  return document.b1.a320.value='';
;};
function a102(a15){a15.style.background='white';};
function a103(a15)
 {a15.style.background='lightgray';
  return document.b1.a310.value='';  
;};
function a104()
 {
  document.b1.a310.value='';
  document.b1.a320.value='';
  k1=0;  
;};

$(document).ready(function()
 {
  $('#a330').on('focus',function(){$('#a340').val('');k1=1;}); 
  $('#a340').on('focus',function(){$('#a330').val('');k1=2;});

   $('#a223').bind('click',function()
     {
      
      if(k1==1)
       {
        var ach1=document.b2.a330.validity;
        if(ach1.valid)
          {
           var a11=parseFloat(document.b2.a330.value); //inch
           var a13=a11*2.54;    //cm
            document.b2.a340.value=a105(a13);
//    return document.b2.a340.value;
         ;}//if
         else{alert('number isnot valid');};
      ;}//if
     if(k1==2)
      {
       var ach2=document.b2.a340.validity;
       if(ach2.valid)
        {
         var a11=parseFloat(document.b2.a340.value); //cm
         var a13=a11/2.54;    //inch
          document.b2.a330.value=a105(a13);
//   return document.b2.a330.value;
       ;}
       else{alert('number isnot valid');};
  ;}
       
    ;});//click
;});//ready

$(document).ready(function()
 {
  $('#a350').on('focus',function(){$('#a360').val('');k1=1;}); 
  $('#a360').on('focus',function(){$('#a350').val('');k1=2;});

   $('#a243').bind('click',function()
     { 
      if(k1==1)
       {
        var ach1=document.b3.a350.validity;
        if(ach1.valid)
          {
           var a11=parseFloat(document.b3.a350.value); //C
           var a13=a11*1.8+32;;    //F
            document.b3.a360.value=a105(a13);
//     return document.b3.a360.value;
         ;}//if
         else{alert('number isnot valid');};
      ;}//if
     if(k1==2)
      {
       var ach2=document.b3.a360.validity;
       if(ach2.valid)
        {
         var a11=parseFloat(document.b3.a360.value); //cm
         var a13=(a11-32)/1.8;   //inch
          document.b3.a350.value=a105(a13);
//   return document.b3.a350.value;
       ;}
       else{alert('number isnot valid');};
  ;}
       
    ;});//click
;});//ready

/*
function a130() 
 {
  if(k4==1)
   {
    var a11=parseFloat(document.b4.a340.value); //inch
    var a13=a11*2.54;                       //cm
    document.b4.a350.value=a135(a13);
    return document.b4.a350.value;
  ;}
  if(k4==2)
   {
    var a11=parseFloat(document.b4.a350.value); //cm
    var a13=a11/2.54;                           //inch
    document.b4.a340.value=a135(a13);
    return document.b4.a340.value;
  ;}
;}

function a160() 
 {
  if(k7==1)
   {
    var a11=parseFloat(document.b7.a370.value); //°F
    var a13=(a11-32)/1.8;                       //°C
    document.b7.a380.value=a165(a13);
    return document.b7.a380.value;
  ;}
  if(k7==2)
   {
    var a11=parseFloat(document.b7.a380.value); //°C
    var a13=a11*1.8+32;                         //°F
    document.b7.a370.value=a165(a13);
    return document.b7.a370.value;
  ;}
;}
*/
