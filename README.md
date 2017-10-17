# Dash Flux LED

This project aims to simplify the usage of a flux_led bulb or LED stripe and an Amazon Dash button.
It allows to turn on or off the connected bulb / stripe with the press of the Amazon Dash button.


## Configuration
The Docker container needs some environment variables to work.
These are:

MAC_ADDRESS: 	The MAC address of your Amazon Dash button.

IP_ADDRESS: 	The IP address of your flux_led bulb / stripe.


Optional:
TIMEOUT: 		Timeout between dash button presses (default 5000)
PROTOCOL:		Protocol for the dash button (default 'udp')
INTERFACE: 		Interface the program should listen for the dash button