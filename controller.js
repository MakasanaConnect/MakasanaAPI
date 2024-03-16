const mockStorage = require('./mockStorage');


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

	try {
		mockStorage.createUser(userinfo);
	} catch (err) {
		throw err;
	}
	// TODO: error handling

}

function login(loginBody) {
	//TODO: get user from database with email
	
	// compare password
	
	// if password match : return user
	// else return error

	try {
		user = mockStorage.getUserByPhonenumber(loginBody.phoneNumber)

		if (user.password == loginBody.password) {
			return user
		} else {
			throw new Error("wrong phone number or password"); 
		}
	} catch (err) {
		throw err;
	} 
}

function addMember(  members) {
	try {
		members.array.forEach(member => {
			mockStorage.addMember(member)
		});

		return {"message": "member(s) successfully added"}
	} catch (error) {
		throw error;
	}
}


module.exports = {verifyID, register, login, addMember}