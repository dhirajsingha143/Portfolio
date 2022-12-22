//mobile-menu 

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

//pop-up window portfolio-project section

function showDetails(project) {
  //containers for popup-window
  const popupcontainer = document.createElement('div');
  popupcontainer.classList.add('popup-container');
  popupcontainer.id='popup-container';
  const popupimgContainer = document.createElement('div');
  popupimgContainer.classList.add('popupimg-container');

  //img
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-container');
  const img = document.createElement('img');
  img.classList.add('img');
  img.src =project.image;
  img.alt = 'Portfolio Project Image';
  imgDiv.append(img);
  //div.image-container>
  //img.img>scr="project.image">alt="Portfolio Project Image"

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  //Title
  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.textContent = project.name;
  btnContainer.append(title);
  //h2.project-title> project.name

  //btnClose
  const btnClose = document.createElement('i');
  btnClose.classList.add('fa-solid','fa-x');
  btnClose.addEventListener('click', () => {
    document.getElementById('popup-container').remove();
  });
  btnContainer.append(btnClose);
  //div.btn-container> img#close-btn>src="images/cross2.svg">alt...
  //event = btnClose-> #popup-container.remove()

  //List of Details-------------------------------------
  const projectName = document.createElement('ul');
  projectName.classList.add('project-info');
  //similar to above list of details

  let j = 0;
  const subTitle = document.createElement('li');
  subTitle.classList.add('sub-title');
  subTitle.textContent = project.details[j];

  const bullet1 = document.createElement('li');
  bullet1.classList.add('bullet');
  const symbol1 = document.createElement('i');
  symbol1.classList.add('fa-solid','fa-circle','fa-xs');
  bullet1.append(symbol1);
  //-----------------
  const bullet2 = document.createElement('li');
  bullet2.classList.add('bullet');
  const symbol2 = document.createElement('i');
  symbol2.classList.add('fa-solid','fa-circle','fa-xs');
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
  //ul.project-name
    //li.sub-title> a>href='#'<- project.details[j] {Cannopy}
    //li.bullet(&#x2022) {*}
    //li> a.backend-yr>href="#"<- project.details[j] {Backend Dev}
    //li.bullet(&#x2022) {*}
    //li> a.backend-yr <-project.details[j] {2015}

  // Descriptions
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = project.description;
  //p.discription <- project.description

  // detail Footer
  const detailFooter = document.createElement('div');
  detailFooter.classList.add('detail-footer');
  //div.detail-footer

  // list techonologies
  const technologies = document.createElement('ul');
  technologies.classList.add('program');
  //ul.classification
  for (let i = 0; i < project.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('language');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = project.technologies[i];
    li.append(anchor);
    technologies.append(li);
  }
  //ul.classification > li.lang> a>href="#" <- project.technologies[i]

  // Buttons
  const buttonLive = document.createElement('button');
  buttonLive.classList.add('btn');
  buttonLive.type = 'button';
  //button.btn>type="button"

  const txtBtnLive = document.createElement('p');
  txtBtnLive.textContent = 'See Live';
  //p <- "See Live"

  const imgBtnLive = document.createElement('img');
  imgBtnLive.src = 'images/live-Icon.svg';
  imgBtnLive.alt = 'Button Live';
  buttonLive.append(txtBtnLive);
  buttonLive.append(imgBtnLive);
  //button.btn>type="button">p <- "See Live">img>src..>alt..

  const buttonSource = document.createElement('button');
  buttonSource.classList.add('btn');
  buttonSource.type = 'button';

  const txtBtnSource = document.createElement('p');
  txtBtnSource.textContent = 'See Source';

  const imgBtnSource = document.createElement('img');
  imgBtnSource.src = 'images/purple-github in button.svg';
  imgBtnSource.alt = 'Button Source';
  buttonSource.append(txtBtnSource);
  buttonSource.append(imgBtnSource);
  //button.btn>type="button">p <- "See Source">img>src..>alt..

  
  detailFooter.append(buttonLive);
  detailFooter.append(buttonSource);
  //div.detail-footer >
    //ul.classification > li.lang> a>href="#" <- project.technologies[i]
    //button.btn>type="button">p <- "See Live">img>src..>alt..
    //button.btn>type="button">p <- "See Source">img>src..>alt..

  // Add all element into the container
  // popupimgContainer.append(title);
  popupimgContainer.append(btnContainer);
  popupimgContainer.append(projectName);
  popupimgContainer.append(imgDiv);
  popupimgContainer.append(description);
  popupimgContainer.append(technologies);
  popupimgContainer.append(detailFooter);

  popupcontainer.append(popupimgContainer);
  document.body.append(popupcontainer);

  //All elements append sequence wise inside body. 

  /*popupimgcontainer.popupimg-container
    h2.project-title> project.name
    div.btn-container> img#close-btn>src="images/cross2.svg">alt...{EVENT}
        ul.project-name
            li.sub-title> a>href='#'<- project.details[j] {Cannopy}
            li.bullet(&#x2022) {*}
            li> a.backend-yr>href="#"<- project.details[j] {Backend Dev}
            li.bullet(&#x2022) {*}
            li> a.backend-yr <-project.details[j] {2015}
    div.image-container>
        img.img>scr="project.image">alt="Portfolio Project Image"
        p.discription <- project.description
    div.detail-footer >
        ul.classification > 
            li.lang> a>href="#" <- project.technologies[i] {Loop}
    button.btn>type="button">p <- "See Live">img>src..>alt..
    button.btn>type="button">p <- "See Source">img>src..>alt..
  */
}

/* Update list of project dynamicaly */
const defaultDescription = 'A daily section of privately personalized reads; no accounts or sign-ups required.'
const listProject = [
    {
      name: 'Tonic', description: defaultDescription , image: 'images/Project-1.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
    },
    {
      name: 'Multi-Post Stories',  description: defaultDescription , image: 'images/Project-2.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
    },
    {
      name: 'Facebook 360', description: defaultDescription , image: 'images/Project-3.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
    },
    {
      name: 'Uber Navigation', description: defaultDescription , image: 'images/Project-4.png', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
    },
  ];

const work = document.getElementById('portfolio');
let index = 0;
listProject.forEach((project) => {
  const portfolioCard = document.createElement('div');
  portfolioCard.classList.add('card');
  //div.card

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = 'Portfolio-Project-1';
  //img.img>src="project.image">alt..

  const workDescription = document.createElement('div');
  workDescription.classList.add('card-info-container');
  //div.work-description

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = project.name;
  //h2.project-title <- project.name

  /* List of details */
  const projectName = document.createElement('ul');
  projectName.classList.add('info');
  //similar to above list of details

  let j = 0;
  const subTitle = document.createElement('li');
  subTitle.classList.add('sub-title');
  subTitle.textContent = project.details[j];

  const bullet1 = document.createElement('li');
  bullet1.classList.add('bullet');
  const symbol1 = document.createElement('i');
  symbol1.classList.add('fa-solid','fa-circle','fa-xs');
  bullet1.append(symbol1);
  //-----------------
  const bullet2 = document.createElement('li');
  bullet2.classList.add('bullet');
  const symbol2 = document.createElement('i');
  symbol2.classList.add('fa-solid','fa-circle','fa-xs');
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

  //appending all li's into ul.project.name

  // Descriptions of project in card
  const description = document.createElement('p');
  description.classList.add('card-text');
  description.textContent = project.description;

  //creating list of technology languages used
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

  // btn for the popup-showdetailed project
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.type = 'button';
  button.textContent = 'See Project';

  // On click show detail
  button.addEventListener('click', () => { 
    showDetails(project); 
  });

  buttonDiv.append(button);

  // add all elements 
  workDescription.append(title);
  workDescription.append(projectName);
  workDescription.append(description);
  workDescription.append(technologies);
  workDescription.append(buttonDiv);

  //This function helps in reversing the order of elements in cards
  if (index % 2 === 0) {
    portfolioCard.append(img);
    portfolioCard.append(workDescription);
  } else {
    portfolioCard.append(img);
    portfolioCard.append(workDescription);
    portfolioCard.classList.add('card-reverse');
  }

  // add project to the work section
  work.append(portfolioCard);
  index += 1;
});