var mqtt = require("mqtt");

var tsdb_mqtt_client = null;

if (tsdb_mqtt_client == null) {
  tsdb_mqtt_client = mqtt.connect("mqtt://" + use_mqtt_broker + ":" + use_mqtt_port);

  tsdb_mqtt_client.on("connect", function () {
    console.log("tsdb_mqtt_client is connected");
  });

  tsdb_mqtt_client.on("error", function () {
    tsdb_mqtt_client = null;
  });
}

exports.publish = function (topic, content) {
  tsdb_mqtt_client.publish(topic, content);
};
