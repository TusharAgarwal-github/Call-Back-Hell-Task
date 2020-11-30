function timer10(ten, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '10'
		cb(timer9)
	}, 1000)
}

function timer9(nine, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '9'
		cb(timer8)
	}, 1000)
}

function timer8(eight, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '8'
		cb(timer7)
	}, 1000)
}

function timer7(seven, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '7'
		cb(timer6)
	}, 1000)
}

function timer6(six, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '6'
		cb(timer5)
	}, 1000)
}

function timer5(five, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '5'
		cb(timer4)
	}, 1000)
}

function timer4(four, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '4'
		cb(timer3)
	}, 1000)
}

function timer3(three, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '3'
		cb(timer2)
	}, 1000)
}

function timer2(two, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '2'
		cb(timer1)
	}, 1000)
}

function timer1(one, cb) {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = '1'
		cb(message)
	}, 1000)
}

function message() {
	setTimeout(function () {
		document.getElementById('msg').innerHTML = 'HAPPY INDEPENDENCE DAY'
	}, 1000)
}
timer10(10, function (timer9) {
	timer9(9, function (timer8) {
		timer8(8, function (timer7) {
			timer7(7, function (timer6) {
				timer6(6, function (timer5) {
					timer5(5, function (timer4) {
						timer4(4, function (timer3) {
							timer3(3, function (timer2) {
								timer2(2, function (timer1) {
									timer1(1, function (message) {
										message()
									})
								})
							})
						})
					})
				})
			})
		})
	})
})
