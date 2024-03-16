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
	
	// compare password
	
	// if password match : return user
	// else return error

	try {

		// get user from storage with phone number
		user = mockStorage.getUserByPhonenumber(loginBody.phoneNumber)

		// if user found | check if passwords match
		if (user.password == loginBody.password) {
			
			// return user if match
			return user
		} else {

			// else not match throw error
			throw new Error("wrong phone number or password"); 
		}
	} catch (err) {
		throw err;
	} 
}

function addMember(  members) {
	try {
		members.array.forEach(member => {

			// persist each member
			mockStorage.addMember(member, uid)
		});

		return {"message": "member(s) successfully added"}
	} catch (error) {
		throw error;
	}
}

function updateMembers(members, uid) {
	// update house hold members' information
	try {
		members.array.forEach(member => {
			// update information for each member
			mockStorage.updateMembers(member, uid)
		});
	} catch (err) {
		throw err;
	}
}

function updateSkills(skills, uid) {
	try {
		mockStorage.updateSkills(skills, uid);
	} catch (err) {
		throw err;
	}
}


module.exports = {verifyID, register, login, addMember, updateMembers, updateSkills}