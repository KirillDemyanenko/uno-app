import { createElement, createButton, createInput, createParagraph } from '../helpers/helpers';

export const createRegistrationContainer = () => {
  const header = document.querySelector('.header') as HTMLDivElement;
  const container = createElement('div', 'registration-container') as HTMLDivElement;
  const registrationBtn = createButton('btn-reg', 'button', 'registration');
  const loginBtn = createButton('btn-log', 'button', 'login');
  container.append(registrationBtn, loginBtn);

  header.prepend(container);
};

export const createRegOrLogWindow = (method: string) => {
  const main = document.querySelector('.main') as HTMLDivElement;
  const form = createElement('form', `${method}-window`) as HTMLDivElement;
  const nameBlock = createElement('div', `${method}-name-block`) as HTMLDivElement;
  const passwordBlock = createElement('div', `${method}-password-block`) as HTMLDivElement;

  const nameTitle = createParagraph(`${method}-name-title`, 'Edit your nickname');
  const inputName = createInput(`input-${method}-name`, 'text', '[5 - 10 letters]');
  inputName.pattern = '[A-Za-z]{5,10}';
  inputName.maxLength = 10;
  inputName.oninput = () => inputName.value = inputName.value.replace(/[^а-яa-zА-ЯA-Z]/g, '');

  const passwordTitle = createParagraph(`${method}-password-title`, 'Edit your password');
  const inputPassword = createInput(`input-${method}-password`, 'password', '[5 numbers]');
  inputPassword.pattern = '[0-9]{5}';
  inputPassword.maxLength = 5;
  inputPassword.oninput = () => inputPassword.value = inputPassword.value.replace(/[^0-9]/g, '');

  const cross = createButton('btn-cross', 'button', 'x');
  const submit = createButton(`btn-submit-${method}`, 'submit', `${method}`);

  nameBlock.append(nameTitle, inputName);
  passwordBlock.append(passwordTitle, inputPassword);
  form.append(nameBlock, passwordBlock, cross, submit);
  const mailBlock = createElement('div', 'mail-block') as HTMLDivElement;
  if (method === 'reg') {
    const mailTitle = createParagraph('mail-title', 'Edit your Email');
    const mail = createInput('input-mail', 'mail', 'ivanovivan@mail.ru');
    mailBlock.append(mailTitle, mail);
    form.append(mailBlock);
  }

  main.append(form);
};

document.addEventListener('click', (e) => {
  const element = e.target as HTMLButtonElement;

  if (element.closest('.btn-reg')) {
    (document.querySelector('.opacity') as HTMLDivElement).classList.add(
      'show',
    );
    createRegOrLogWindow('reg');
  }
  if (element.closest('.reg-window .btn-cross')) {
    (document.querySelector('.opacity') as HTMLDivElement).classList.remove(
      'show',
    );
    document.querySelector('.reg-window')?.remove();
  }
  if (element.closest('.btn-log')) {
    (document.querySelector('.opacity') as HTMLDivElement).classList.add(
      'show',
    );
    createRegOrLogWindow('log');
  }
  if (element.closest('.log-window .btn-cross')) {
    (document.querySelector('.opacity') as HTMLDivElement).classList.remove(
      'show',
    );
    document.querySelector('.log-window')?.remove();
  }
});