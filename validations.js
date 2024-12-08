addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form')
    const submit = document.querySelector('#button button')
    submit.onclick = () => validateForm(form, submit);
})

const fullNameReg = /^([А-яёЁЇїІіЄєҐґ]{3,16})( [А-яёЁЇїІіЄєҐґ]{3,16}){2}$/
const variantReg = /^([0-9]{1,3})$/
const groupReg = /^([А-ЯЁЇІЄҐ]{2}(мп)?-[0-9]{2})$/
const telReg = /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/
const idReg = /^[0-9]{4}$/

function validateForm(form, submit) {
    const formData = new FormData(form);

    let failures = false;
    validateAndUpdateError('full-name', fullNameReg);
    validateAndUpdateError('variant', variantReg);
    validateAndUpdateError('group', groupReg);
    validateAndUpdateError('telephone', telReg);
    validateAndUpdateError('card-id', idReg);

    if (!failures) {
        submit.innerText = "Submitted";
        submit.disabled = true;
        form.querySelectorAll('input').forEach(x => x.disabled = true);
    }

    function validateAndUpdateError(id, reg) {
        const field = formData.get(id);
        const errorLabel = form.querySelector(`#${id}-case .validation-error`);
        if (field.match(reg) != null) {
            errorLabel.hidden = true
        } else {
            errorLabel.hidden = false
            failures = true;
        }
    }
}
