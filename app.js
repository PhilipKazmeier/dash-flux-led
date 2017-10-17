const dash_button = require('node-dash-button');
const flux_led_bulb = require('flux-led').Bulb;
const net = require('net');


// Parse environment variables
mac_address = process.env.MAC_ADDRESS || null;
led_ip = process.env.IP_ADDRESS || null;
timeout = process.env.TIMEOUT || null;
interf = process.env.INTERFACE || null;
proto = process.env.PROTOCOL || 'udp';

if ((mac_address == null) || (led_ip == null)) {
	console.error('Missing environement variables!');
	console.error('You need to define MAC_ADDRESS and IP_ADDRESS.');
	return;
}

var dash = dash_button(mac_address, interf, timeout, proto);

dash.on("detected", function (){
	// on button press connect to the bulb
	var led_stripe = new flux_led_bulb(led_ip);
	led_stripe.connect(() => {
		led_stripe.refreshState(() => {
			if (led_stripe.isOn) {
				led_stripe.turnOff();
				console.log('Turning off')
			} else {
				led_stripe.turnOn();
				console.log('Turning on')
			}
			// disconnect from the bulb after sending the command
			led_stripe._socket.destroy();
		});
	});
});
