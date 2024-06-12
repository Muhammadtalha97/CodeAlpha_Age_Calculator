document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // Adjust months and years if needed
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('years').innerHTML = `${years}<br>Years`;
    document.getElementById('months').innerHTML = ` ${months}<br>Months`;
    document.getElementById('days').innerHTML = ` ${days}<br>Days`;

    document.getElementById('msg').innerHTML = "Thank You for Choose <br> Successfullly Age Count"
});

