$(document).ready(function()
 {
  $('#aford2').html('our video');
  var aplayer = videojs("ourvid");
  aplayer.ready(function(){this.play();} )

;});
 
