var aa=0,ao=0;
var alog; 
$(document).ready(function()
 {
   alog = log4javascript.getDefaultLogger();
   if(navigator.geolocation)
    {
     console.log('geo!');
     var aoptions = {timeout: 5000,maximumAge: 0};
     function asuccess(apos)
       {
         console.log('ageo!');
        var crd = apos.coords;
        var a1=crd.latitude;
        var a2=crd.longitude;
         aa=parseFloat(a1);
         ao=parseFloat(a2);
//        alert('a='+a1+' n='+a2);
         var at1="string:a1="+a1+' a2='+a2;
         var at2=" numbers aa="+aa+" ao="+ao;

//       alog.info('geolocation was successful defined');
//       alog.info(at1);
//       alog.info(at2);
      ;};
     function aerror(err)
       {
         console.log('no geo');
         console.warn('ERROR(' + err.code + '): '+err.message);
         alog.info('the geolocation not defined');
         alog.info('ERROR('+err.code+'): '+err.message);
      ;}
     navigator.geolocation
       .getCurrentPosition(asuccess,aerror,aoptions);
    }//ifa104 
   else { alog.info("not geo");console.log('not geo');};
;});
$(document).ready(function()
 {
  $('#ad092').html('');
  $('#ad093').show();
  $('#ad102').html('');
  $('#ad103').show();
  $('#a9map').html('');
  $('#a10map').html('');
  var a101=ol.control;
  var a102=new ol.View({

      center: [3872000, 3762000],

      zoom: 11
     })
;
  var a103=new ol.source.OSM(); 
  var a105=new ol.View({
         center: ol.proj.transform([34.775, 31.97],
          'EPSG:4326', 'EPSG:3857'),
         zoom: 15
        });
  var amap = new ol.Map({

    controls: a101.defaults().extend([

       new a101.OverviewMap()

      ]),

    layers: [

       new ol.layer.Tile({
source:a103})

      ],

    target: 'a0map',

    view:a102 
     });

    
 $('.ol-zoom-in,.ol-zoom-out').tooltip({placement:'right'});
  
    $('#aa001').on('click',function()
     {
      var amap = new ol.Map({

       controls: a101.defaults().extend([

          new a101.OverviewMap()

         ]),

       layers: [

         new ol.layer.Tile({
source:a103})

        ],

       target: 'a9map',

       view:a105 
      });//amap
    ;});//on
    
    $('#aa002').on('click',function() 
      {
        $('#ad102').html('aa= '+aa+' ao='+ao);
        
       
     ;});      
  
    $('#aa102').on('click',function()
     {
      $('#ad103').hide();
      var a106=new ol.View({
         center: ol.proj.transform([ao,aa],
          'EPSG:4326', 'EPSG:3857'),
         zoom: 15
        });//v
      var amap = new ol.Map({

        controls: a101.defaults().extend([

          new a101.OverviewMap()

         ]),

        layers: [

          new ol.layer.Tile({
source:a103})

         ],

        target: 'a10map',

        view:a106 
      });//amap
     var pos = ol.proj.fromLonLat([ao,aa]);
       var marker = new ol.Overlay({
         position: pos,
         positioning: 'center-center',
         element: document.getElementById('marker'),
         stopEvent: false
});
     amap.addOverlay(marker);
    ;});//on
  

function af09()
 {

  $('#ad092').html('');
  $('#a9map').html('');
  $('#ad093').show();
;};
function af10()
 {
 
  $('#ad102').html('');
  $('#a10map').html('');
  $('#ad103').show();
;};
   $('#aa091').on('click',function(){af09();});
   $('#aa101').on('click',function(){af10();});
;});//ready


$(document).ready(function()
 {
   
;});






