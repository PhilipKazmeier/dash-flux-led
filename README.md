# Dash Flux LED

[![Docker build](https://img.shields.io/docker/build/philipkazmeier/dash-flux-led.svg)](https://hub.docker.com/r/philipkazmeier/dash-flux-led/)
[![Docker pulls](https://img.shields.io/docker/pulls/philipkazmeier/dash-flux-led.svg)](https://hub.docker.com/r/philipkazmeier/dash-flux-led/)


This project aims to simplify the usage of a flux_led bulb or LED stripe and an Amazon Dash button.
It allows to turn on or off the connected bulb / stripe with the press of the Amazon Dash button.


## Configuration
The Docker container needs some environment variables to work.
### Required
- `MAC_ADDRESS` defines the MAC address of your Amazon Dash button.
- `IP_ADDRESS` defines the IP address of your flux_led bulb / stripe.


### Optional:
- `TIMEOUT` defines the	timeout between dash button presses (default 5000)
- `PROTOCOL` defines the protocol used by the dash button (default 'udp')
- `INTERFACE` defines the	interface the program should listen for the dash button
