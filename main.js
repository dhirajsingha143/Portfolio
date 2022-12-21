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

//pop-up window

/* Project list */
const listProject = [
  {
    name: 'Tonic',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/portfolio-snapshot-1.svg',
    details: ['CANOPY', 'Back End Dev', '2015'],
    technologies: ['html', 'css', 'javaScript'],
    link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio- snapshot-2.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Tonic', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio- snapshoot-3.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio-snapshoot-4.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
];

function workCard(project,id) {
  const workSection = document.querySelector('#work');


  const card = `

  <div class="card" >
  <img src="images/Project-1.png" alt="Screenshot of Tonic web page" />
  <div class="card-info-container">
    <h2 class="title">${project.name}</h2>
    <ul class="info">
      <li class="info-items">${project.details[0]}</li>
      <li class="info-item"><i class="fa-solid fa-circle fa-xs"></i></li>
      <li class="info-items">${project.details[1]}</li>
      <li class="info-item"><i class="fa-solid fa-circle fa-xs"></i></li>
      <li class="info-items">${project.details[2]}</li>
    </ul>
    <p class="card-text">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <ul class="program">
      <li class="language">${project.technologies[0]}</li>
      <li class="language">${project.technologies[1]}</li>
      <li class="language">${project.technologies[2]}</li>
    </ul>
    <button id=${id} class="btn modal">See Project</button>
  </div>
</div>

`;

  workSection.innerHTML += card;

}

// // a UI class
class UI {
  static displayUI(project) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList = 'popup-wrapper';
    wrapperDiv.id = 'popup-wrapper';

    //portfolio snapshot
    const portfolioSnapshot = document.createElement('div');
    portfolioSnapshot.classList.add('portfolio-snapshot');

    //img div
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-wrapper');
    const image = document.createElement('img');
    image.classList.add('img');
    image.src = project.image;
    image.alt = 'portfolio image';
    imgDiv.append(image);

    //title
    const title = document.createElement('h1');
    title.classList.add('project-title');
    title.textContent = project.name;

    //button close
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');
    const btnClose = document.createElement('img');
    btnClose.id = 'close-btn';
    btnClose.src = 'images/cross2.svg';
    btnClose.alt = 'Close button';
    btnClose.addEventListener('click', () => {
      document.getElementById('popup-wrapper').remove();
    });
    btnWrapper.append(btnClose);

    /* List of details */
    const projectName = document.createElement('ul');
    projectName.classList.add('project-name');

    let j = 0;
    const subTitle = document.createElement('li');
    subTitle.classList.add('sub-title');
    const subTitleAnchor = document.createElement('a');
    subTitleAnchor.href = '#';
    subTitleAnchor.textContent = project.details[j];
    subTitle.append(subTitleAnchor);

    const bullet1 = document.createElement('li');
    bullet1.classList.add('bullet');
    bullet1.innerHTML = '&#x2022;';
    const bullet2 = document.createElement('li');
    bullet2.classList.add('bullet');
    bullet2.innerHTML = '&#x2022;';

    j += 1;
    const typeProject = document.createElement('li');
    const typeProjectAnchor = document.createElement('a');
    typeProjectAnchor.classList.add('backend-yr');
    typeProjectAnchor.href = '#';
    typeProjectAnchor.textContent = project.details[j];
    typeProject.append(typeProjectAnchor);

    j += 1;
    const date = document.createElement('li');
    const dateAnchor = document.createElement('a');
    dateAnchor.classList.add('backend-yr');
    dateAnchor.textContent = project.details[j];
    date.append(dateAnchor);

    projectName.append(subTitle);
    projectName.append(bullet1);
    projectName.append(typeProject);
    projectName.append(bullet2);
    projectName.append(date);

    // Descriptions
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.description;
    /* */

    // detail Footer
    const detailFooter = document.createElement('div');
    detailFooter.classList.add('detail-footer');

    // list techonologies
    const technologies = document.createElement('ul');
    technologies.classList.add('classification');
    for (let i = 0; i < project.technologies.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add('lang');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = project.technologies[i];
      li.append(anchor);
      technologies.append(li);
    }

    // Buttons
    const buttonLive = document.createElement('button');
    buttonLive.classList.add('btn');
    buttonLive.type = 'button';

    const txtBtnLive = document.createElement('p');
    txtBtnLive.textContent = 'See Live';

    const imgBtnLive = document.createElement('img');
    imgBtnLive.src = 'images/live-Icon.svg';
    imgBtnLive.alt = 'Button Live';
    buttonLive.append(txtBtnLive);
    buttonLive.append(imgBtnLive);

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

    detailFooter.append(technologies);
    detailFooter.append(buttonLive);
    detailFooter.append(buttonSource);

    // Add all element into the container
    portfolioSnapshot.append(title);
    portfolioSnapshot.append(btnWrapper);
    portfolioSnapshot.append(projectName);
    portfolioSnapshot.append(imgDiv);
    portfolioSnapshot.append(description);
    portfolioSnapshot.append(detailFooter);


    wrapperDiv.append(portfolioSnapshot);



    console.log(wrapperDiv);

    //add to the body
    // document.querySelector('body').appendChild(wrapperDiv);
    //or better 
    document.body.append(wrapperDiv);


  }

}

//print cards
listProject.forEach( (project,id) => {
  workCard(project,id);
 
})



//added event listener to each modal on card
const modals = document.querySelectorAll('.modal');


modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    UI.displayUI(listProject[e.target.id]);
    console.log(e.target.id)
  })
})
