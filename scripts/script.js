const form = document.querySelector('#form')
const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const consentInput = document.getElementById('consent')
const consentLabel = document.getElementById('consent-label')
const generalEnquiryInput = document.getElementById('general-enquiry')
const supportRequestInput = document.getElementById('support-request')
const supportRequestBox = document.getElementById('support-request-box')
const generalRequestBox = document.getElementById('general-enquiry-box')


const toast = document.getElementById('toast')
const toastMessage = document.getElementById('toast-message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if(firstNameInput.value === '') {
        firstNameInput.style.border = '2px solid var(--error-color)'
        toastMessage.textContent = 'This field is required'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } else {
        firstNameInput.style.border = '2px solid var(--btn-color)'
    }

    if(lastNameInput.value === '') {
        lastNameInput.style.border = '2px solid var(--error-color)'
        toastMessage.textContent = 'This field is required'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } else {
        lastNameInput.style.border = '2px solid var(--btn-color)'
    }

    if(emailInput.value === '') {
        emailInput.style.border = '2px solid var(--error-color)'
        toastMessage.textContent = 'This field is required'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } if(!isEmailValid(emailInput.value)) {
        emailInput.style.border = '2px solid var(--error-color)'
        toastMessage.textContent = 'Please enter a valid email address'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } else {
        emailInput.style.border = '2px solid var(--btn-color)'
    }

    if(!supportRequestInput.checked && !generalEnquiryInput.checked) {
        supportRequestBox.style.border = '2px solid var(--error-color)'
        generalRequestBox.style.border = '2px solid var(--error-color)'
        toastMessage.textContent = 'Please select a query type'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } else {
        supportRequestBox.style.border = '2px solid var(--btn-color)'
        generalRequestBox.style.border = '2px solid var(--btn-color)'
    }

    if(messageInput.value === '') {
        messageInput.style.border = '2px solid var(--error-color)'
        toastMessage.textContent = 'This field is required'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } else {
        messageInput.style.border = '2px solid var(--btn-color)'
    }

    if(!consentInput.checked) {
        toastMessage.textContent = 'To submit this form, please consent to being contacted'
        toast.style.backgroundColor = 'var(--error-color)'
        toast.style.display = 'block'
        consentLabel.style.color = 'var(--error-color)'

        setTimeout(()=> {
            toast.style.display = 'none'
        }, 2000)

        return
    } else {
        consentLabel.style.color = 'var(--primary-text)'
    }
    
    toastMessage.textContent = 'Thanks for completing the form. We"ll be in touch soon!'
    toast.style.backgroundColor = 'var(--btn-color)'
    toast.style.display = 'block'

    setTimeout(()=> {
        form.submit()
    }, 4000)
    
})

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    ) 

    if(emailRegex.test(email)) {
        return true
    }

    return false
}


