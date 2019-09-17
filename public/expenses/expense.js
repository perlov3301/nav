
var demo= {};

 demo.data = [
    { id: "11", category: "food",           cost: 100},
    { id: "12", category: "transportation", cost: 10},
    { id: "13", category: "clothes",        cost: 100},
    { id: "14", category: "health",         cost: 30},
    { id: "15", category: "education",      cost: 30},
    { id: "16", category: "housing",        cost: 30},
    { id: "17", category: "other",          cost: 30}
  ];
 

$(document).ready(function()
 { $('').click(function(){ ;}); });

$(document).ready(function()
 {
   $('').bind('click',function()
    {     
   ;});
;});
$(document).ready(function(){;});

$(document).ready(function()
  {$('#ad002,#ad0031,#ad003,#ad004,#ad005,#ad006').hide();});


$(document).ready(function()
 {
   window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB|| window.msIndexedDB;
   if (!window.indexedDB) 
     {$('#ad011').html("browser does not support IDB");}
  else
   {
     $('#ad011').html('IndexedDB is supported');
     $('#ad012').html('click back-button for continue');
     $('#ad013').hide();
  ;}
;});

$(document).ready(function()
  {
    $('#ab021').bind('click',function()
      {  
        $('#ad023').hide(); 
        demo.request = window.indexedDB.open("aexp1", 1);
        demo.request.onerror=function(event)
          {$('#ad021').html("error: ");};
        demo.request.onsuccess = function(event) 
          {
            demo.db = demo.request.result;
            $('#ad021').html("success:IDB is opened ");
            $('#ad022').html('(see the console)');
            console.log('success:'+demo.db);
            $('#ad005').show();
            $('#ad006').show();
            $('#ad002').hide();
         ;};
        demo.request.onupgradeneeded = function(event)
          {
            demo.db = event.target.result;
           var astor= demo.db.createObjectStore("costs",{keyPath:"id"});
           for (var i in demo.data) 
             {astor.add(demo.data[i]);}
          }
     ;});
 ;});



$(document).ready(function()
  {
    $('#ab031').bind('click',function()
      {      
        $('#ad033').hide();
       var a1="12";
       var a101= demo.db.transaction(["costs"]);
       var a102=a101.objectStore("costs");
       var request = a102.get("12");
        request.onerror = function(event)
          {$('#ad031').html("read Item:cannot find 12");};
        request.onsuccess = function(event)
          {
           var a2=request.result;
           if(a2)
            {
              $('#ad031').html("read Item:"+a1);
              $('#ad032a').html("category "+a2.category + ", ");
              $('#ad032b').html("cost " +a2.cost); 
            } 
           else {$('#ad031').html("read Item: cannot find "+a1)}
         };//onsuccess
     ;});//click
 ;});//ready
$(document).ready(function()
 {
   $('#ab041').bind('click',function()
     {
       $('#ad043').hide();
      var a1=new Array();
      var d1=new Array();
      var i1=-1;
      var a101= demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!!');
          $('#ad041').html('read All Items:');
         var cursor = event.target.result;
         if (cursor)
           {
             i1=i1+1;
             d1[i1]=document.createElement('div');
             $(d1[i1]).addClass('ac11')
                  .appendTo($('#ad042'));
             a1[i1]='';
             a1[i1]+=cursor.key+' '+cursor.value.category+' ';
             a1[i1]+='cost='+cursor.value.cost;
             $(d1[i1]).html(a1[i1]); 
             console.log(" id42="    + cursor.value.id);
             console.log(" category=" + cursor.value.category);
             console.log(" cost="    + cursor.value.cost);
             cursor.continue();
           }
         else {console.log("read All: no more entries!");}
       };
    ;});
;});

$(document).ready(function()
 {
   $('#ab051').bind('click',function()
     {
       $('#ad053').hide();
      var a1=new Array();
      var i1=-1;
      var a101 = demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!!');
          $('#ad051').html('read All:');
         var cursor = event.target.result;
         var note = document.querySelector("ul");
         if (cursor)
           {
             i1=i1+1;
             a1[i1]=cursor.key+' '+cursor.value.category+' ';
             a1[i1]+='cost= '+cursor.value.cost;
             note.innerHTML += '<li>'+a1[i1]+'</li>'; 
             console.log(" id=" + cursor.value.id);
             console.log( cursor.value.category);
             console.log(" cost="    + cursor.value.cost);
             cursor.continue();
           }
         else {console.log("read All: no more entries!");}
       };
    ;});
;});

$(document).ready(function()
 {
   $('#ab061').bind('click',function()
     {
       $('#ad063').hide();
      var a1=new Array();
      var d1;
      var i1=-1;
      var a101 = demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!!');
          $('#ad061').html('read All Items:');
         d1=document.createElement('ol');
         $(d1).addClass('ac14')
              .appendTo('#ad062');
         var cursor = event.target.result;
         var note = document.querySelector("ol");
         if (cursor)
           {
             i1=i1+1;
             a1[i1]=cursor.key+' '+cursor.value.category+' ';
             a1[i1]+='cost '+cursor.value.cost;
             note.innerHTML += '<li>'+a1[i1]+'</li>'; 
             console.log(" id6=" + cursor.value.id);
             console.log(cursor.value.category);
             console.log("cost6="    + cursor.value.cost);
             cursor.continue();
           }
         else {console.log("read All: no more entries!");}
       };
    ;});
;});

$(document).ready(function()
 {
   $('#ab071').bind('click',function()
     {
       $('#ad073').hide();
       $('#ad074').hide();
      var a101=$('#ai071').val();
      var a102=$('#ai072').val();
      var a103=$('#ai073').val();
      var request = demo.db.transaction(["costs"], "readwrite")
        .objectStore("costs")
        .add({ id: a101, category: a102, cost: a103 });
       request.onsuccess = function(event)
         {console.log("addItem():"+ a101+" was added to ..");};
       request.onerror = function(event)
         {console.log("addItem():it is problem with adding"+ a101);};

       var transaction = demo.db.transaction(["costs"]);
       var objectStore = transaction.objectStore("costs");
       var request = objectStore.get(a101);
        request.onerror = function(event)
          {$('#ad071').html("read item"+ a101+":cannot");};
        request.onsuccess = function(event)
          {
           if(request.result)
            {
             var a1=request.result.id+" "+request.result.category;
              a1+=' cost= '+request.result.cost;
              $('#ad071').html("added Item key:"+request.result.id);
              $('#ad072').html(a1);
              
            } 
           else {$('#ad071').html("readItem(): cannot find the item")}
         };


    ;});
;});

$(document).ready(function()
 {
   $('#ab081').bind('click',function()
     {
       $('#ad083').hide();
       $('#ad084').hide();
      var a101=$('#ai081').val();
      var a1,a10;

       var a105 = demo.db.transaction(["costs"]);
       var a106 = a105.objectStore("costs");
       var a107 = a106.get(a101);
        a107.onerror = function(event)
          {$('#ad081').html("read item"+ a101+":cannot");};
        a107.onsuccess = function(event)
          {
           if(a107.result)
            {
              a10=a107.result.id+" "+a107.result.category;              
            } 
           else {$('#ad081').html("readItem(): cannot find the item")}
         };

      var request = demo.db.transaction(["costs"], "readwrite")
        .objectStore("costs")
        .delete(a101);
       request.onsuccess = function(event)
         {console.log("remove Item:"+a101+" was removed");};
       request.onerror = function(event)
         {console.log("remove Item: problem with removing"+a101);}

       var transaction = demo.db.transaction(["costs"]);
       var objectStore = transaction.objectStore("costs");
       var request = objectStore.get(a101);
        request.onerror = function(event)
          {$('#ad081').html("item for removing; "+a101+":cannot find");};
        request.onsuccess = function(event)
          {
           if(request.result)
            {
              a1='key:'+request.result.id+' '+request.result.category+" ";
              a1+='cost: '+request.result.cost;
              $('#ad081').html("your have remove Item:"+a10);
              $('#ad082').html(a1);         
            } 
           else 
            {
              $('#ad081').html("an Item is removed:"+a10);
              $('#ad082').html("cannot find key="+a101);
            }
         };
    ;});//click
;});//ready

$(document).ready(function(){$('ad#103,#ad104,#ad106').hide();});
$(document).ready(function()
 {
   $('#ab102').bind('click',function()
     {
       $('#ad107').hide();
       $('#ad106').show();
       $('#ad103').show();
      var a1=new Array();
      var d1=new Array();
      var i1=0;
       d1[i1]=document.createElement('option');
       $(d1[i1]).addClass('ac11')
           .prop('selected','selected')  //selected='selected'
           .appendTo($('#as11'));           
       $(d1[i1]).text('choose category');
      var a101= demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!!');         
         var cursor = event.target.result;
         if (cursor)
           {
             i1=i1+1;
             d1[i1]=document.createElement('option');
             $(d1[i1]).addClass('ac11')
                  .prop('value',cursor.key)
                  .appendTo($('#as11'));
             $(d1[i1]).text(cursor.value.category);

             console.log(" id10="    + cursor.value.id);
             console.log(" category=" + cursor.value.category);
             console.log(" cost="    + cursor.value.cost);
             cursor.continue();
           }
         else {console.log("read All: no more entries!");}
       };
    ;});
;});

$(document).ready(function(){$('ad#113,#ad114,#ad116').hide();});
$(document).ready(function()
 {
   $('#ab112').bind('click',function()
     {
       $('#ad117').hide();
       $('#ad116').show();
       $('#ad113').show();
      var a1=new Array();
      var d1=new Array();
      var i1=0;
       d1[i1]=document.createElement('option');
       $(d1[i1]).addClass('ac11')
           .prop('selected','selected')  //selected='selected'
           .appendTo($('#as12'));           
       $(d1[i1]).text('choose category');
      var a101= demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!!');         
         var cursor = event.target.result;
         if (cursor)
           {
             i1=i1+1;
             d1[i1]=document.createElement('option');
             $(d1[i1]).addClass('ac11')
                  .prop('value',cursor.key)
                  .appendTo($('#as12'));
             $(d1[i1]).text(cursor.value.category);

             console.log(" id11="    + cursor.value.id);
             console.log(" category=" + cursor.value.category);
             console.log(" cost="    + cursor.value.cost);
             cursor.continue();
           }
         else {console.log("read All: no more entries!");}
       };
    ;});//click
;});//ready


$(document).ready(function()
  {
    $('#as11').on('change', function()
      {
        alert('key='+this.value );
       var a1='value='+this.value;
        $('#ad104').show();
        $("#ad104").html(a1);
      });
    $('#ab101').bind('click',function()
      {   
        $('#ad103').hide();  
       var a1= 'selected key:'+$("#as11").val();
        $("#ad101").html(a1);
       var a2='selected category:'+$('#as11 option:selected').text();
        $('#ad102').html(a2);
     ;});
 ;});

$(document).ready(function()
  {
    $('#as12').on('change', function()
      {
        alert('key='+this.value );
       var a1='key(val)='+this.value;
        $('#ad114').show();
        $("#ad114").html(a1);
      });
    $('#ab111').bind('click',function()
      {   
        $('#ad113').hide();  
       var a01='key for delete:'+$("#as12").val();
        $("#ad111").html(a01);
       var a2='deleted category:'+$('#as12 option:selected').text();
       
       var a101=$('#as12').val();
       var a1,a10;
       var a105 = demo.db.transaction(["costs"]);
       var a106 = a105.objectStore("costs");
       var a107 = a106.get(a101);
        a107.onerror = function(event)
          {$('#ad115').html("read item"+ a101+":cannot");};
        a107.onsuccess = function(event)
          {
           if(a107.result)
            {
              a10=a107.result.id+" "+a107.result.category;              
            } 
           else {$('#ad115').html("readItem(): cannot find the item")}
         };

      var request = demo.db.transaction(["costs"], "readwrite")
        .objectStore("costs")
        .delete(a101);
       request.onsuccess = function(event)
         {
           console.log("remove Item:"+a101+" was removed")
           $('#ad112').html(a2);
        ;};
       request.onerror = function(event)
         {console.log("remove Item: problem with removing"+a101);}

       var transaction = demo.db.transaction(["costs"]);
       var objectStore = transaction.objectStore("costs");
       var request = objectStore.get(a101);
        request.onerror = function(event)
          {$('#ad115').html("item for removing; "+a101+":cannot find");};
        request.onsuccess = function(event)
          {
           if(request.result)
            {
             // a1='key:'+request.result.id+' '+request.result.category;
             // a1+=' cost: '+request.result.cost;
              $('#ad115').html("your have remove Item:"+a10);        
            } 
           else 
            {
              $('#ad115').html("an Item is removed:"+a10);
            }
         };

     ;});
 ;});

$(document).ready(function(){$('ad#123,#ad124,#ad126').hide();});
$(document).ready(function()
 {
   $('#ab122').bind('click',function()
     {
       $('#ad127').hide();
       $('#ad126').show();
       $('#ad123').show();
      var a1=new Array();
      var d1=new Array();
      var i1=0;
       d1[i1]=document.createElement('option');
       $(d1[i1]).addClass('ac11')
           .prop('selected','selected')  //selected='selected'
           .appendTo($('#as13'));           
       $(d1[i1]).text('choose category');
      var a101= demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!!');         
         var cursor = event.target.result;
         if (cursor)
           {
             i1=i1+1;
             d1[i1]=document.createElement('option');
             $(d1[i1]).addClass('ac11')
                  .prop('value',cursor.key)
                  .appendTo($('#as13'));
             $(d1[i1]).text(cursor.value.category);

             console.log(" id12="    + cursor.value.id);
             console.log(" category=" + cursor.value.category);
             console.log(" cost="    + cursor.value.cost);
             cursor.continue();
           }
         else {console.log("read All: no more entries!");}
       };
    ;});//click
;});//ready
$(document).ready(function()
  {
    $('#as13').on('change', function()
      {
        alert('key='+this.value );
       var a1='key(val)='+this.value;
        $('#ad124').show();
        $("#ad124").html(a1);
      });
    $('#ab121').bind('click',function()
      {   
        $('#ad123').hide();  
       var a01=$("#as13").val();//key
       var a02=$('#as13 option:selected').text();//deleted category 
        console.log('delete12 key='+a01+' category='+a02);

       var a101=$('#as13').val();
       var a1,a10,a11,a12;
       var a105 = demo.db.transaction(["costs"]);
       var a106 = a105.objectStore("costs");
       var a107 = a106.get(a101);
        a107.onerror = function(event)
          {$('#ad125').html("read key"+ a101+":cannot");};
        a107.onsuccess = function(event)
          {
           if(a107.result)
            {
              a10=a107.result.id;
              a11=a107.result.category;
              a12=a107.result.cost; 
        console.log('success get12='+a10+' '+a11+' '+a12);
              $("#ad124").html('cost before:'+a12);           
            } 
           else {$('#ad125').html("read:cannot find the item")}
         };

      var request = demo.db.transaction(["costs"], "readwrite")
        .objectStore("costs")
        .delete(a101);
       request.onsuccess = function(event)
         {
           console.log("remove12:"+a101+" was removed");
           var a121=a101;
           var a122=a11;
           var a102=a02;
           var a123=$('#ai121').val();
    console.log('cost12='+a123+' '+a12);
           var a104=parseFloat(a12);
           var a105=parseFloat(a123);
           var a103=a105+a104;
    console.log('go add12:'+a101+' '+a102+' '+a103);
           var request2 = demo.db.transaction(["costs"], "readwrite")
             .objectStore("costs")
             .add({ id: a101, category: a102, cost: a103 });
            request2.onsuccess = function(event)
              {
    console.log("add:"+ a101+' '+a102+' '+a103);
                $('#ad125').show();
                $('#ad125').html("update:"+a102+' cost='+a103);
              
             ;};
            request2.onerror = function(event)
              {console.log("add:problem with adding"+ a101);}
        ;};
       request.onerror = function(event)
         {console.log("remove12: problem with removing"+a101);};

       var a201 = demo.db.transaction(["costs"]);
       var a202= a201.objectStore("costs");
       var a203 = a202.get(a101);
        a203.onerror = function(event)
          {$('#ad125').html("item "+a101+":cannot find");};
        a203.onsuccess = function(event)
          {
           if(a203.result)
            {
              a1='key:'+a203.result.id+' '+a203.result.category+" ";
              a1+='cost: '+a203.result.cost;
        //      $('#ad125').show();
        //      $('#ad125').html("your have Item:"+a1);         
            } 
           else 
            {
        //     $('#ad125').html("an Item is removed:"+a101);
            }
         };

     ;});
 ;});

$(document).ready(function()
 {
   $('#ab131').bind('click',function()
     {
       $('#ad131').hide();
      var a1=new Array();
      var a2=new Array();
      var a3=new Array();
      var a111=new Array();
      var a112=new Array();
      var a103=0;
      var i1=-1;
      var i2;
      var a101 = demo.db.transaction("costs").objectStore("costs");
       a101.openCursor().onsuccess = function(event)
        {
          console.log('!13');
         var cursor = event.target.result;
         if (cursor)
           {
             i1=i1+1;
             a1[i1]=cursor.key;
             a2[i1]=cursor.value.category;
             a3[i1]=cursor.value.id; 
             console.log(i1+' '+cursor.value.id+' '+cursor.value.category);
            var request = demo.db.transaction(["costs"], "readwrite")
                           .objectStore("costs")
                           .delete(a1[i1]); 
             request.onsuccess = function(event)
               {
         console.log('all is deleted  ');
              ;}
             request.onerror = function(event)
               {console.log("problem with removing"+a1[i1]);};
             cursor.continue();
           }
         else {
               console.log("read All: no more entries!");
               for(i2=0;i2<(i1+1);i2++)
                 {
                   a111[i2]=a1[i2];
                   a112[i2]=a2[i2];
                  var a302=demo.db.transaction(["costs"],"readwrite")
                           .objectStore("costs")
                            .add({id:a111[i2],category:a112[i2],cost:a103});

                   a302.onsuccess = function(event)
                    {
                     console.log(i2+' '+a111[i2]+' '+a112[i2]+' '+a103);
                     $('#ad131').show();
                     $('#ad131').html('all is reseted');
                   ;};
                   a302.onerror = function(event)
                   {console.log("problem with adding"+ a111[i2]);};

                ;}
             ;}
       };
    ;});
;});

function af01()
  {
    $('#ad001').html('Indexed Database');
    $('#ad002').show()
 ;};
function af02()
 {
  $('#ad021').html('');
  $('#ad022').html('');
  $('#ad023').show();
;};
function af03()
 {
  $('#ad031').html('');
  $('#ad032a').html('');
  $('#ad032b').html('');
  $('#ad032c').html('');
  $('#ad033').show();
;};
function af04()
 {
  $('#ad041').html('');
  $('#ad042').html('');
  $('#ad042a').html('');
  $('#ad042b').html('');
  $('#ad042c').html('');
  $('#ad043').show();
;};
function af05()
 {
  $('#ad051').html('');
  $('#ad052a').html('');
  $('#ad052b').html('');
  $('#ad052c').html('');
  $('ul').html('');
  $('#ad053').show();
;};
function af06()
 {
  $('#ad061').html('');
  $('#ad062').html('');
  $('#ad063').show();
;};
function af07()
 {
  $('#ad071').html('');
  $('#ad072').html('');
  $('#ad073').show();
  $('#ad074').show();
  $('#ai071').val('');
  $('#ai072').val('');
  $('#ai073').val('');
;};
function af08()
 {
  $('#ad081').html('');
  $('#ad082').html('');
  
  $('#ad083').show();
  $('#ad084').show();
  $('#ai081').val('');
;};
function af09()
 {
  $('#ad091').html('');
  $('#ad092').html('');
  $('#ad0922').html('');
  $('#ad093').show();
;};

function af10()
 {
  $("#as11").prop('selectedIndex',0).selectmenu("refresh");
  $('#ad101').html('');
  $('#ad102').html('');
  $('#ad103').hide();
  $('#ad104').hide();
  $('#ad106').hide();
  $('#ad107').show();
  $('#as11').html('');
  
;};

function af11()
 {
  $("#as12").prop('selectedIndex',0).selectmenu("refresh");
  $('#ad111').html('');
  $('#ad112').html('');
  $('#ad113').hide();
  $('#ad114').hide();
  $('#ad115').hide();
  $('#ad116').hide();
  $('#ad117').show();
  $('#as12').html('');
  
;};

function af12()
 {
  $("#as13").prop('selectedIndex',0).selectmenu("refresh");
  $('#ad121').html('');
  $('#ad122').html('');
  $('#ai121').val('');
  $('#ad123').hide();
  $('#ad124').hide();
  $('#ad125').hide();
  $('#ad126').hide();
  $('#ad127').show();
  $('#as13').html(''); 
;};

function af13()
 {
   $('#ad133').show();
   $('#ad131,#ad132').hide();
;};


      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(a397);
      function a397() 
       {
        var a391 = google.visualization.arrayToDataTable([
          ['task', ' per day'],
          ['food',      12],
          ['transportation',     5],
          ['clothes',      5],
          ['health',  3],
          ['education', 2],
          ['housing',    7]
         ]);
        var a301=document.getElementById('ad0031');
        var a302 = {title: 'My daily expenses'};
        var a303 = new google.visualization.PieChart(a301);
         a303.draw(a391,a302);
       }

$(document).ready(function()
 {
   $('#ab091').bind('click',function()
    {
      $('#ad093').hide();
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(a395());
      

      function a395() 
       {
        var a01=new Array();
        var a02=new Array();  
        var a391;
        var i01=0;
         a01[0]=['task', ' per day'];
      var a0101 = demo.db.transaction("costs").objectStore("costs");
       a0101.openCursor().onsuccess = function(event)
        {
          console.log('!!');
         var cursor = event.target.result;

         if (cursor)
           {
             i01=i01+1;
             a02[i01]=parseFloat(cursor.value.cost);
             a01[i01]=[cursor.value.category,a02[i01]];
              
             console.log('i='+i01+" a01:" + a01[i01]);
             
             cursor.continue();
           }
         else 
          {
            console.log("read All: no more entries!")
            a391 = google.visualization.arrayToDataTable(a01);

           var a301=document.getElementById('ad0922');
           var a302 = {title: 'My daily expenses'};
           var a303 = new google.visualization.PieChart(a301);
            a303.draw(a391,a302);
         ;}//write pie
       };

        i01=0;
       }
   ;});
;});
