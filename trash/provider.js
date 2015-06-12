var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', fuction (topic, message) {
	console.log(message.toString());
});

client.end();
