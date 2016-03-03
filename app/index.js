var Board=require('../board.js');
board=new Board.Board();

//***********
var html="<option value='Port' >---</option>";
$("#ports").html(html);
  var serialPor = require("serialport");
  serialPor.list(function(err,ports){
  ports.forEach(function(port){
    if(port.manufacturer != undefined){
      html+="<option value='"+port.comName+"' >"+port.comName+"</option>";
    }
  });
  $("#ports").html(html);
})
          //***********

$("#button_conect").click(function(){
 board.connect($("#ports").val());
});          
        
$("#button_righ").click(function(){
  $("#board-status").attr("src","icons/motor_righ.png");
  board.write('a');
});

$("#button_left").click(function(){
  $("#board-status").attr("src","icons/motor_left.png");
  board.write('b');
});

$("#button_stop").click(function(){
  $("#board-status").attr("src","icons/motor_stop.png");
  board.write('c');
});

$("#button_righ-toggle").mousedown(function() {
     board.write('a');
      $("#board-status").attr("src","icons/motor_righ.png");
  })
  .mouseup(function() {
     board.write('c');
       $("#board-status").attr("src","icons/motor_stop.png");
  });

$("#button_left-toggle").mousedown(function() {
     board.write('b');
      $("#board-status").attr("src","icons/motor_left.png");
  })
  .mouseup(function() {
     board.write('c');
       $("#board-status").attr("src","icons/motor_stop.png");
  });  
