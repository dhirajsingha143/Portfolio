//  mobile-menu

const divMenu = document.querySelector('.mobile-menu');
const crossButton = document.querySelector('.cross-button');
const hamburgerButton = document.querySelector('.fa-bars');
const navLink = document.querySelector('.nav-link');

const openMenu = () => {
  divMenu.classList.toggle('display');
};

crossButton.addEventListener('click', () => {
  openMenu();
});

hamburgerButton.addEventListener('click', () => {
  openMenu();
});

navLink.addEventListener('click', () => {
  openMenu();
});

//  pop-up window portfolio-project section

function showDetails(project) {
  //  containers for popup-window
  const popupcontainer = document.createElement('div');
  popupcontainer.classList.add('popup-container');
  popupcontainer.id = 'popup-container';
  const popupimgContainer = document.createElement('div');
  popupimgContainer.classList.add('popupimg-container');

  //  img
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-container');
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = 'Portfolio Project Image';
  imgDiv.append(img);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  //  Title
  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.textContent = project.name;
  btnContainer.append(title);

  //  btnClose
  const btnClose = document.createElement('i');
  btnClose.classList.add('fa-solid', 'fa-x');
  btnClose.addEventListener('click', () => {
    document.getElementById('popup-container').remove();
  });
  btnContainer.append(btnClose);

  //  List of Details-------------------------------------
  const projectName = document.createElement('ul');
  projectName.classList.add('project-info');

  let j = 0;
  const subTitle = document.createElement('li');
  subTitle.classList.add('sub-title');
  subTitle.textContent = project.details[j];

  const bullet1 = document.createElement('li');
  bullet1.classList.add('bullet');
  const symbol1 = document.createElement('i');
  symbol1.classList.add('fa-solid', 'fa-circle', 'fa-xs');
  bullet1.append(symbol1);
  //  -----------------
  const bullet2 = document.createElement('li');
  bullet2.classList.add('bullet');
  const symbol2 = document.createElement('i');
  symbol2.classList.add('fa-solid', 'fa-circle', 'fa-xs');
  bullet2.append(symbol2);

  j += 1;
  const typeProject = document.createElement('li');
  typeProject.classList.add('backend-yr');
  typeProject.textContent = project.details[j];

  j += 1;
  const date = document.createElement('li');
  date.classList.add('backend-yr');
  date.textContent = project.details[j];

  projectName.append(subTitle);
  projectName.append(bullet1);
  projectName.append(typeProject);
  projectName.append(bullet2);
  projectName.append(date);

  //  Descriptions
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = project.description;

  //  detail Footer
  const detailFooter = document.createElement('div');
  detailFooter.classList.add('detail-footer');

  //  list techonologies
  const technologies = document.createElement('ul');
  technologies.classList.add('program');

  for (let i = 0; i < project.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('language');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = project.technologies[i];
    li.append(anchor);
    technologies.append(li);
  }

  //  Buttons
  const buttonLive = document.createElement('button');
  buttonLive.classList.add('btn');
  buttonLive.type = 'button';
  //  button.btn>type="button"

  const txtBtnLive = document.createElement('a');
  txtBtnLive.textContent = 'See Live';
  txtBtnLive.href = project.link.live;

  const imgBtnLive = document.createElement('img');
  imgBtnLive.src = 'images/live-Icon.svg';
  imgBtnLive.alt = 'Button Live';
  buttonLive.append(txtBtnLive);
  buttonLive.append(imgBtnLive);

  const buttonSource = document.createElement('button');
  buttonSource.classList.add('btn');
  buttonSource.type = 'button';

  const txtBtnSource = document.createElement('a');
  txtBtnSource.textContent = 'See Source';
  txtBtnSource.href = project.link.source;

  const imgBtnSource = document.createElement('img');
  imgBtnSource.src = 'images/purple-github in button.svg';
  imgBtnSource.alt = 'Button Source';
  buttonSource.append(txtBtnSource);
  buttonSource.append(imgBtnSource);

  detailFooter.append(buttonLive);
  detailFooter.append(buttonSource);

  //  Add all element into the container
  popupimgContainer.append(btnContainer);
  popupimgContainer.append(projectName);
  popupimgContainer.append(imgDiv);
  popupimgContainer.append(description);
  popupimgContainer.append(technologies);
  popupimgContainer.append(detailFooter);

  popupcontainer.append(popupimgContainer);
  document.body.append(popupcontainer);
}

/* Update list of project dynamicaly */
const defaultDescription = 'A daily section of privately personalized reads; no accounts or sign-ups required. Future projects will be added here.';
const listProject = [
  {
    name: 'ITIKD International Conference', description: 'This is a Conference Website, regarding ITIKD (IT Inovation and Knowledge Discovery) 2023. This site showcase the conference details, its past accomplishments and key guest, also sponsoring partners.', image: 'images/ITIKD.png', details: ['Conference', 'Front End Dev', '2023'], technologies: ['html', 'css', 'javaScript'], link: { live: 'https://sparkly-puffpuff-9addc3.netlify.app/index.html', source: 'https://github.com/dhirajsingha143/ITIKD-Conference-2023' },
  },
  {
    name: 'Sample Teplate', description: defaultDescription, image: 'images/Project-2.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Sample Teplate', description: defaultDescription, image: 'images/Project-3.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Sample Teplate', description: defaultDescription, image: 'images/Project-4.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
];

const work = document.getElementById('portfolio');
let index = 0;
listProject.forEach((project) => {
  const portfolioCard = document.createElement('div');
  portfolioCard.classList.add('card');
  //  div.card

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = 'Portfolio-Project-1';

  const workDescription = document.createElement('div');
  workDescription.classList.add('card-info-container');

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = project.name;

  /* List of details */
  const projectName = document.createElement('ul');
  projectName.classList.add('info');

  let j = 0;
  const subTitle = document.createElement('li');
  subTitle.classList.add('sub-title');
  subTitle.textContent = project.details[j];

  const bullet1 = document.createElement('li');
  bullet1.classList.add('bullet');
  const symbol1 = document.createElement('i');
  symbol1.classList.add('fa-solid', 'fa-circle', 'fa-xs');
  bullet1.append(symbol1);
  //  -----------------
  const bullet2 = document.createElement('li');
  bullet2.classList.add('bullet');
  const symbol2 = document.createElement('i');
  symbol2.classList.add('fa-solid', 'fa-circle', 'fa-xs');
  bullet2.append(symbol2);

  j += 1;
  const typeProject = document.createElement('li');
  typeProject.classList.add('backend-yr');
  typeProject.textContent = project.details[j];

  j += 1;
  const date = document.createElement('li');
  date.classList.add('backend-yr');
  date.textContent = project.details[j];

  projectName.append(subTitle);
  projectName.append(bullet1);
  projectName.append(typeProject);
  projectName.append(bullet2);
  projectName.append(date);

  //  Appending all li's into ul.project.name

  //  Descriptions of project in card
  const description = document.createElement('p');
  description.classList.add('card-text');
  description.textContent = project.description;

  //  creating list of technology languages used
  const technologies = document.createElement('ul');
  technologies.classList.add('program');
  for (let i = 0; i < project.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('language');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = project.technologies[i];
    li.append(anchor);
    technologies.append(li);
  }

  //  btn for the popup-showdetailed project
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.type = 'button';
  button.textContent = 'See Project';

  //  On click show detail
  button.addEventListener('click', () => {
    showDetails(project);
  });

  buttonDiv.append(button);

  //  add all elements
  workDescription.append(title);
  workDescription.append(projectName);
  workDescription.append(description);
  workDescription.append(technologies);
  workDescription.append(buttonDiv);

  //  This function helps in reversing the order of elements in cards
  if (index % 2 === 0) {
    portfolioCard.append(img);
    portfolioCard.append(workDescription);
  } else {
    portfolioCard.append(img);
    portfolioCard.append(workDescription);
    portfolioCard.classList.add('card-reverse');
  }

  //  add project to the work section
  work.append(portfolioCard);
  index += 1;
});

/* Form Validation */
const form = document.getElementById('contact-form');
const error = document.getElementById('error');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { email } = form.elements;
  if (email.validity.typeMismatch
    || email.value.toLowerCase() !== email.value
    || !email.validity.valid) {
    error.textContent = 'Invalid email. Please ensure you have the correct email address. Thank you!';
  } else {
    form.submit();
  }
});

//  save data
window.addEventListener('beforeunload', () => {
  const savedData = { name: form.name.value, email: form.email.value, message: form.message.value };
  window.localStorage.setItem('formData', JSON.stringify(savedData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(window.localStorage.getItem('formData'));
  form.name.value = savedData.name;
  form.email.value = savedData.email;
  form.message.value = savedData.message;
});
