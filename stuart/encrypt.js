var crypto = require('crypto');

exports.compare = function(encryption, credential, callback){
	if (typeof encryption !== 'string' || typeof credential !== 'string')
		return callback(null, false);

	var parts = encryption.split(':');

	if (!parts[0] || !parts[1] || !parts[2])
		return callback(null, false);

	var salt = Buffer(parts[0],'base64');
	var iterations = parseInt(parts[1]);
	var hash = Buffer(parts[2],'base64');

	crypto.pbkdf2(
		credential,
		salt,
		iterations,
		hash.length,
		'sha1',
		function(err, pass){
			if(err) throw cb(err);

			var condition = hash.toString('hex') === Buffer(pass,'binary').toString('hex')

			return callback(null, condition);
		});
}
