const dash_button = require('node-dash-button');

const flux_led_bulb = require('flux-led').Bulb

mac_address = process.env.MAC_ADDRESS || null;
led_ip = process.env.IP_ADDRESS || null;

var dash = dash_button(mac_address, null, 10000, 'udp');

var led_stripe = new flux_led_bulb(led_ip);

led_stripe.connect(() => {
	console.log('connected');
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