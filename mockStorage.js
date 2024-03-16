
let users = [

	{'full_name': 'Karabo Doe',
		'address': {
			'building': '55',
			'street': 'John Cena St.',
			'city': 'Orlando West',
			'province': 'Gauteng'
		},
		'phone_number': '08976473272',
		"password" : "12345678",
		"id": "86939280980086",
		"members": [],
	},
	{'full_name': 'Jane Doe',
		'address': {
			'building': '30',
			'street': 'Eddie Gerero St.',
			'city': 'Orlando West',
			'province': 'Gauteng'
		},
		'phone_number': '08976473272',
		"password" : "12345678",
		"id": "92939280980086",
		"members": [],
	},
	{'full_name': 'David Bloob',
		'address': {
			'building': '12',
			'street': 'Mock St.',
			'city': 'Orlando West',
			'province': 'Gauteng'
		},
		'phone_number': '0676473272',
		"password" : "12345678",
		"id": "93939280980086",
		"members": [],
	},
	{'full_name': 'Luke Skywalker',
		'address': {
			'building': '1',
			'street': 'Ahch-To St.',
			'city': 'Orlando West',
			'province': 'Gauteng'
		},
		'phone_number': '08976473272',
		"password" : "ILoveB2",
		"id": "3039280980086",
		"members": [],
	}
]



function testCon() {
	query = "select * from [dbo].[users]"
		
	sql.query(connectionString, query, (err, rows) => {
		console.log(rows);
	});
}

function createUser(userinfo) {
	// TODO: create user
	users.push(userinfo)
}


function getUserByPhonenumber(phonenumber) {
	// TODO fetch use from database by phone number

	let foundUser = null

	users.forEach((user) => {
		if (phonenumber == user.phone_number ){
			foundUser = user 
		}
	})

	return foundUser
}

function countPhonenumber(phonenumber) {
	// TODO: count instances of phone number
	let count = 0;

	users.forEach((user) => {
		if (user.phone_number == phonenumber) {
			count++;
		}
	})

	return count
}

function addMember(member) {
	// TODO: add members to database

}

module.exports = {createUser, addMember, getUserByPhonenumber, countPhonenumber}