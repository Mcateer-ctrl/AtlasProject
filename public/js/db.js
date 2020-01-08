

const form = document.querySelector('#add-sale-form')

//saving data
form.addEventListener('submit', evt => {
    evt.preventDefault();
    db.collection('Sales').add({
        email: form.email.value,
        gift_aid: form.gift_aid.value,
        donation_amount: form.donation_amount.value
    })

});