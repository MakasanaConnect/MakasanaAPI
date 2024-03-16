const storage = require('./storage');


function verifyID(id) {
	// TODO : contact home affairs api for id confirmation

	return {
		'full_name': 'Karabo Doe',
		'address': {
			'building': '55',
			'street': 'John Cena St.',
			'city': 'Orlando West',
			'province': 'Gauteng'
		},
		'phone_number': '08976473272',
		'id': id
	}
}


function register(userinfo) {
	// TODO: check if phone is already in use.


	// TODO: persist userinfo into database
	storage.createUser(userinfo);

	// TODO: error handling

}

function login(loginBody) {
	//TODO: get user from database with email
	
	// compare password
	
	// if password match : return user
	// else return error
}

function addMember(  members) {
	try {
		members.array.forEach(member => {
			storage.addMember(member)
		});
	} catch (error) {
		throw error;
	}
}

function testCon() {
	storage.testCon()
}

module.exports = {verifyID, register, login, addMember, testCon}