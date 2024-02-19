document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var academic_level = document.getElementById('academic_level').value;
    if (name && email && date && time && academic_level) {
        document.getElementById('redirectButton').style.display = 'inline-block';
    }
});
