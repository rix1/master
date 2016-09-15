
var vueData = [{
    url: "https://github.com/rix1/master-monitoring-server",
    name: "Monitoring Server",
    desc: "Meteor server for receiving data from BLE devices and publishing it to clients in real time.",
    license: [{
        projectName: "Meteor",
        projectUrl: "https://github.com/meteor/meteor/",
        licenseName: "MIT",
        licenseUrl: "https://github.com/meteor/meteor/blob/master/LICENSE",
        copyright: "Copyright (C) 2011 – 2016 Meteor Development Group"
    }]
}, {
    url: "https://github.com/rix1/master-time-sync",
    name: "Time Synchronizing Server",
    desc: "Node server for synchronizing time between clients. Using the following open source software:",
    license: [{
        projectName: "TimeSync",
        projectUrl: "https://github.com/enmasseio/timesync/",
        licenseUrl: "https://github.com/enmasseio/timesync/blob/master/LICENSE",
        licenseName: "MIT",
        copyright: "Copyright (c) 2016 enmasse.io"
    }]
}, {
    url: "https://github.com/rix1/master-ble-emit-logger",
    name: "BLE Emit Logger",
    desc: "Node server for registering when a nRF51 board emits data over BLE.",
    license: [{
        projectName: "TimeSync",
        projectUrl: "https://github.com/enmasseio/timesync/",
        licenseUrl: "https://github.com/enmasseio/timesync/blob/master/LICENSE",
        licenseName: "MIT",
        copyright: "Copyright (c) 2016 enmasse.io"
    }, {
        projectName: "node-serialport",
        projectUrl: "https://github.com/EmergingTechnologyAdvisors/node-serialport",
        licenseUrl: "https://github.com/EmergingTechnologyAdvisors/node-serialport/blob/master/LICENSE",
        licenseName: "MIT",
        copyright: "Copyright 2010, 2011, 2012 Christopher Williams"
    }, {
        projectName: "node-ddp-client",
        projectUrl: "https://github.com/oortcloud/node-ddp-client",
        licenseUrl: "https://github.com/oortcloud/node-ddp-client/blob/master/LICENSE",
        licenseName: "MIT/X11",
        copyright: "Copyright (C) 2013 – 2016 by Tom Coleman"
    }]
}, {
    url: "https://github.com/rix1/master-iot-gateway",
    name: "Android Sensor Gateway",
    desc: "An Android gateway for proxying data from BLE devices to Meteor servers.",
    license: [{
        projectName: "Android-DDP",
        projectUrl: "https://github.com/delight-im/Android-DDP",
        licenseName: "Apache 2.0",
        licenseUrl: "https://github.com/oortcloud/node-ddp-client/blob/master/LICENSE",
        copyright: "Copyright (c) delight.im <info@delight.im>"
    }]
}, {
    url: "https://github.com/rix1/master-sensor-software",
    name: "Sensor Software",
    desc: "mBed software for Nordic Semiconductor nRF51822 Development kit. Used in our end-to-end latency experiment.",
    license: [{
        projectName: "ARM mbed Microcontroller Library",
        projectUrl: "https://developer.mbed.org/handbook/mbed-SDK",
        licenseName: "Apache 2.0",
        licenseUrl: "https://developer.mbed.org/handbook/mbed-SDK#open-source",
        copyright: "Copyright (c) 2006-2015 ARM Limited"
    }]
}]


new Vue({
  el: '#app',
  data: {
	data: vueData
  }
})

console.log(vueData);
