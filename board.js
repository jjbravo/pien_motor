var SerialPort = require("serialport").SerialPort
var serialPort;
statusButtons(true);
 var Board = function(){

	this.connect=function(port){
					
					//serialPort = new SerialPort("/dev/ttyUSB0", { //Para arduino cambiar a /dev/ttyUSB0
					serialPort = new SerialPort(port, { //Para Pnguino cambiar a /dev/ttyACM0
					baudrate: 9600
					}, false); // this is the openImmediately flag [default is true]
					serialPort.open(function (error) {
					  if ( error ) {
					  	console.log('failed to open: '+error);
					  	$('#error-conect').text('Failed to open - '+error);

					  	statusButtons(true);
					    
					  }else{
					  	
					  	$('#error-conect').text('');
					  	statusButtons(false);
					  } 
					});
				};
	this.write=function (data){
			serialPort.open(function (error) {
					  if ( error ) {
					    console.log('failed to open: '+error);
					  } else {
					    console.log('write '+data);

					    serialPort.write(data, function(err, results) {
					    	if(err) console.log('err ' + err);
						        
						        console.log('results ' + results);
				    		});
						}
					});
				  	
				  };
	this.read=function(){
		serialPort.open(function (error) {
					  if ( error ) {
					    console.log('failed to open: '+error);
					  } else {
					    console.log('read');

							 serialPort.on('data', function(data) {
						      console.log('data received: ' + data);
						     //return data;
						    });
				  
						}
					});

				  	
				  };
  }

  

function statusButtons(status){
	$("#button_righ").prop( "disabled", status );
	$("#button_left").prop( "disabled", status );
	$("#button_stop").prop( "disabled", status );
	$("#button_righ-toggle").prop( "disabled", status );
	$("#button_left-toggle").prop( "disabled", status );				    
}
  

  




module.exports.Board = Board;