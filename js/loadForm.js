const forms = document.querySelectorAll('form');
const disabledForm = (form) =>{
  form.classList.add(form.classList.contains('map__filters') ? 'map__filters--disabled' : 'ad-form--disabled');
  const selects = form.querySelectorAll('select');
  selects.forEach((select)=>{
    select.setAttribute('disabled', '');
  });
  const fieldsets = form.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset)=>{
    fieldset.setAttribute('disabled', '');
  });
};
const enebledForm = (form) => {
  form.classList.remove(form.classList.contains('map__filters') ? 'map__filters--disabled' : 'ad-form--disabled');
  const selects = form.querySelectorAll('select');
  selects.forEach((select)=>{
    select.removeAttribute('disabled');
  });
  const fieldsets = form.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset)=>{
    fieldset.removeAttribute('disabled');
  });
};
export const disabledForms = () =>{
  forms.forEach((form) => disabledForm(form));
};
export const enabledForms = () =>{
  forms.forEach((form) => enebledForm(form));
};
