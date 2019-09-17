
var ada1=[];//ah
var ada2=[];//am
var ada3=[];//ap
var i26=0;
var alng;
var imn=3;
$(document).ready(function()
  {$('#ad005,#ad003').hide();});

$(document).ready(function()
 {
   var afile='ac620.json';
   var xhr = new XMLHttpRequest();
    xhr.open('GET', afile);
    xhr.onload = function()
     {
      var ajsn0= xhr.responseText;                       
      var data= JSON.parse(ajsn0); 

       alng=data.length;
        console.log('there are '+alng+' items');
        $('#ad081').html("there are "+alng+' items');
         $.each(data, function(ai,aset)
          {
     console.log(ai+' '+aset.ah+' '+aset.am+' '+aset.ap);
            ada1[ai]=aset.ah;
            ada2[ai]=aset.am;
            ada3[ai]=aset.ap;
     console.log(ai+' '+ada1[ai]+' '+ada2[ai]+' '+ada3[ai]);
          });//each
             
     };onload
 xhr.send();
;});/*ready*/

$(document).ready(function() {;});
$(document).ready(function()
 { $('').click(function(){ ;}); });

$(document).ready(function()
 {
   $('').on('click',function()
    { 

   ;});
;});

$(document).ready(function(){;});
$(document).ready(function()  {$('').hide();});
$(document).ready(function()  {$('').show();});


$(document).ready(function() {  ;});//ready

$(document).ready(function()
 {
  $('#ai071').val(imn);
  var a1='will be displayed '+imn+' banners on page';
    $('#ad072').html(a1);

  $('#ab071').on('click',function()
     {
//       $('#ad073').hide();
      var aimn=$('#ai071').val();
       imn=parseInt(aimn);
      var a1='will be displayed '+imn+' banners on each page';
      $('#ad072').html(a1);
    ;});//on
;});//ready

$(document).ready(function(){$('#ad082,#ab0812').hide();;});

$(document).ready(function()
 {
   $('#ab0811').on('click',function()
     {
       $('#ab0812').show();
       $('#ad082').html('');
       $('#ad082').show();
       i26=i26+imn;
      var i11;
    console.log('i26='+i26);
      if((i26+imn)<alng){i11=i26;}
       else{i11=alng-imn;i26=i11;$('#ab0811').hide();;};
      var tdiv=new Array();
      var adiv=new Array();
      var ah11=new Array();
      var ap11=new Array();
      for (var i1=i11;i1<(i11+imn);i1++)
       {
        tdiv[i1]="<div data-role='collapsible'  />";
        adiv[i1]=$(tdiv[i1]);
        $(adiv[i1]).attr('id','');
        if((i1%imn)==0){$(adiv[i1]).attr('data-collapsed','false');};
        ah11[i1]=$("<h3/>");
        $(ah11[i1]).html(ada1[i1]);
        $(adiv[i1]).append(ah11[i1]);
        $(adiv[i1]).append($('<img>',{width:'110',src:ada2[i1]}));
        ap11[i1]=$("<p class='ac11'/>");
        $(ap11[i1]).html(ada3[i1]);
        $(adiv[i1]).append(ap11[i1]);
        $('#ad082').append(adiv[i1]);
        $('#ad082').collapsibleset('refresh');
       };
    ;});//click
;});//ready

$(document).ready(function()
 {
   $('#ab0812').on('click',function()
     {
       $('#ab0811').show();
       $('#ad082').html('');
       $('#ad082').show();
       i26=i26-imn;
      var i11;
      if(i26>0){i11=i26;}
       else{i26=0;i11=0;$('#ab0812').hide();};
      var tdiv=new Array();
      var adiv=new Array();
      var ah11=new Array();
      var ap11=new Array();
      for (var i1=i11;i1<(i11+imn);i1++)
       {
        tdiv[i1]="<div data-role='collapsible'  />";
        adiv[i1]=$(tdiv[i1]);
        $(adiv[i1]).attr('id','');
        if((i1%imn)==0){$(adiv[i1]).attr('data-collapsed','false');};
        ah11[i1]=$("<h3/>");
        $(ah11[i1]).html(ada1[i1]);
        $(adiv[i1]).append(ah11[i1]);
        $(adiv[i1]).append($('<img>',{width:'110',src:ada2[i1]}));
        ap11[i1]=$("<p class='ac11'/>");
        $(ap11[i1]).html(ada3[i1]);
        $(adiv[i1]).append(ap11[i1]);
        $('#ad082').append(adiv[i1]);
        $('#ad082').collapsibleset('refresh');
       };
    ;});//click
;});//ready

/*af07 is not in use*/
function af07() 
 {
  $('#ad071').html('');
  $('#ad072').html('');
  $('#ad073').show();
  $('#ai071').val('');
;};
function af08()
 {
  $('#ab0812').hide();
  $('#ab0811').show();
  $('#ad082').html('');
  
  $('#ad083').show();
;};

$(document).ready(function()
 {
  $('#aa082').on('click',function(){af08();;});
;});

function af081()
 {
  $('#ab0811').show();
  $('#ab0812').hide();
  $('#ad082').html('');
  $('#ad082').show();
   i26=0;
      var i1=i26;
      var tdiv=new Array();
      var adiv=new Array();
      var ah11=new Array();
      var ap11=new Array();
      for (i1=0;i1<imn;i1++)
       {
        tdiv[i1]="<div data-role='collapsible'  />";
        adiv[i1]=$(tdiv[i1]);
        $(adiv[i1]).attr('id','');
        if((i1%imn)==0){$(adiv[i1]).attr('data-collapsed','false');};
        ah11[i1]=$("<h3/>");
        $(ah11[i1]).html(ada1[i1]);
        $(adiv[i1]).append(ah11[i1]);
        $(adiv[i1]).append($('<img>',{width:'110',src:ada2[i1]}));
        ap11[i1]=$("<p class='ac11'/>");
        $(ap11[i1]).html(ada3[i1]);
        $(adiv[i1]).append(ap11[i1]);
        $('#ad082').append(adiv[i1]);
        $('#ad082').collapsibleset('refresh');
       };
;};

$(document).ready(function()
 {
   $('#aa008').on('click',function() { af081();;});
;});

$(document).ready(function()  {$('#ad001').hide();;});
