const storage = require('./mockStorage');

function logRequest(log, uid) {
	// create request log
	try {
		storage.logRequest(log, uid);
	} catch (err) {
		throw err;
	}
}

function getAllRequestLogs(location) {
	try {
		// get all request logs with location
		requestLogs = storage.getAllRequestLogs(location);
		return requestLogs;

	} catch (err) {
		throw err;
	}
}

function searchServiceProviders(serviceQuery) {
	// get all service providers by service
	try {
		let serviceProviders = storage.getServiceProviders(serviceQuery);
		return serviceProviders;
	} catch(err) {
		throw err;
	}
}

function getServiceProvider(providerID) {
	// get service provider by ID
	try {
		let serviceProvider = storage.getServiceProvider(providerID);
		return serviceProvider;
	} catch (err) {
		throw err;
	}
}

function createJobRequest(job, providerID) {
	// hire service provider
	try {
		storage.createJobRequest(providerID, job);
	} catch (err) {
		throw err;
	}
}

function acceptJob(jobID) {
	// accept job request
	try {
		storage.acceptJob(jobID)
	} catch (err) {
		throw err;
	}
}


function declineJob(jobID) {
	// decline job request
	try {
		storage.declineJob(jobID);
	} catch (err) {
		throw err;
	}
}

module.exports = {
	logRequest,
	getAllRequestLogs,
	searchServiceProviders,
	getServiceProvider,
	createJobRequest,
	declineJob,
	acceptJob
}