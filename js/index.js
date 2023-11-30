var timeInput = document.querySelector('.time');

timeInput.addEventListener('change', function() {
    var selectedTime = new Date('1970-01-01T' + this.value);
    var minTime = new Date('1970-01-01T09:00');
    var maxTime = new Date('1970-01-01T23:00');

    if (selectedTime < minTime || selectedTime > maxTime) {
        alert('We are not working at that time! Pick any time between 09:00 and 23:00!');
        this.value = '';
    }
});

localStorage.setItem('submittedForm', false)


if (localStorage.submittedForm != 'true') {
    document.querySelector('.help-btn').addEventListener('click', () => {
        let name = document.querySelector('.name').value
        let phone = document.querySelector('.phone').value
        let date = document.querySelector('.date').value
        let time = document.querySelector('.time').value
        let doctor = document.querySelector('.select').value
        
        const nameRegex = /^[а-яА-Яa-zA-Z\s\-']{2,50}$/;
        const armenianPhoneRegex = /^(\+374|0)([1-9]|10)[- ]?\d{6}$/;
    
        if (name && phone && nameRegex.test(name) && armenianPhoneRegex.test(phone)) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: `${name}, you are registered with ${doctor} on ${date} in ${time}! Thank you!`,
            })
            localStorage.setItem('submittedForm', true)
            document.querySelector('.help-btn').disabled = true;
            document.querySelector('.name').value = '';
            document.querySelector('.phone').value = '';
            document.querySelector('.help-btn').style.background = 'gray'
            document.querySelector('.help-btn').style.cursor = 'not-allowed'
            document.querySelector('.help-btn > p').textContent = 'Application accepted'
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Data entered incorrectly.',
            })
        }
    })
} else {
    document.querySelector('.help-btn').disabled = true;
    document.querySelector('.help-btn').style.background = 'gray'
    document.querySelector('.help-btn').style.cursor = 'not-allowed'
    document.querySelector('.help-btn > p').textContent = 'Application accepted' 
}