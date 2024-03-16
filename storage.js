const sql = require("msnodesqlv8");

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

	return {"phone_number": "1234567890", "password" : "12345678"}
}

function countPhonenumber(phonenumber) {
	return 0;
}

function addMember(member) {

}

module.exports = {createUser, addMember, testCon}