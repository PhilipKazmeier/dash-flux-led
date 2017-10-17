const dash_button = require('node-dash-button');
const flux_led_bulb = require('flux-led').Bulb



// Parse environment variables
mac_address = process.env.MAC_ADDRESS || null;
led_ip = process.env.IP_ADDRESS || null;
timeout = process.env.TIMEOUT || 5000;
interf = process.env.INTERFACE || null;
proto = process.env.PROTOCOL || 'udp';

if ((mac_address == null) || (led_ip == null)) {
	console.error('Missing environement variables!');
	console.error('You need to define MAC_ADDRESS and IP_ADDRESS.');
	return;
}

var dash = dash_button(mac_address, interf, timeout, proto);
var led_stripe = new flux_led_bulb(led_ip);

led_stripe.connect(() => {
	console.log('Connected to the LED stripe');
});

dash.on("detected", function (){
	console.log("omg found");
	led_stripe.refreshState(() => {

		if (led_stripe.isOn)
			led_stripe.turnOff();
		else
			led_stripe.turnOn();
	})
});