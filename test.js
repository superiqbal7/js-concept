async function sendEmailToCustomer(){
	try{
		const customer = await getCustomer();
		console.log('Customer: ', customer);

		if(customer.isGold){
			const movies = await getTopMovies()
			console.log('Top movies: ', movies);

			await sendEmail(customer.email, movies)
			console.log('Email sent...');
		}
	} catch (error){
		new Error('Buggggg')
	}
}
sendEmailToCustomer();

function getCustomer(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		    resolve({ 
		      id: 1, 
		      name: 'Rahim Iqbal', 
		      isGold: true, 
		      email: 'email' 
		    });
		}, 4000);
	})
}

function getTopMovies() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
	    resolve(['movie1', 'movie2']);
	  }, 4000);
	})
}

function sendEmail(email, movies) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		    resolve();
		}, 4000);
	})
}
