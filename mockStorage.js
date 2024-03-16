
const connectionString = "Driver={SQL Server};Server=tcp:ukukhulaserver.database.windows.net,1433;Database=MakasanaDB;Uid=bbdadmin;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30";


function testCon() {
	query = "select * from [dbo].[users]"
		
	sql.query(connectionString, query, (err, rows) => {
		console.log(rows);
	});
}

function createUser(userinfo) {
	// TODO: create user

}


function getUserByPhonenumber(phonenumber) {
	// TODO fetch use from database by phone number

	let user = {'full_name': 'Karabo Doe',
		'address': {
			'building': '55',
			'street': 'John Cena St.',
			'city': 'Orlando West',
			'province': 'Gauteng'
		},
		'phone_number': '08976473272',
		"password" : "12345678",
		"id": "86939280980086"
	}

	return user
}

function countPhonenumber(phonenumber) {
	return 0;
}

function addMember(member) {
	// TODO: add members to database

}

module.exports = {createUser, addMember, getUserByPhonenumber, countPhonenumber}