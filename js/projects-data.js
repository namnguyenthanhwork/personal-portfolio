let projects = [
  {
    dataCategory: 'web',
    imgSrc: './img/portfolio/thumb/project-1.png',
    dataScreenshots:
      'img/portfolio/large/project-1/1.jpg,img/portfolio/large/project-1/2.jpg,img/portfolio/large/project-1/3.jpg,img/portfolio/large/project-1/4.jpg,img/portfolio/large/project-1/5.jpg,img/portfolio/large/project-1/6.jpg,img/portfolio/large/project-1/7.jpg',
    projectTitle: 'Restaurant',
    projectDescription: 'Midterm big exercise',
    projectDate: 'Nov 02, 2020 4:55PM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js, jquery',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/restaurant/',
  },
  {
    dataCategory: 'landing-page',
    imgSrc: './img/portfolio/thumb/project-2.png',
    dataScreenshots: 'img/portfolio/large/project-2/1.jpg',
    projectTitle: 'NewBiz',
    projectDescription: 'CLone landing page, train coding',
    projectDate: 'May 04, 2021 3:21PM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js, jquery',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/newbiz/',
  },
  {
    dataCategory: 'landing-page',
    imgSrc: './img/portfolio/thumb/project-3.jpg',
    dataScreenshots: 'img/portfolio/large/project-3/1.jpg',
    projectTitle: 'Honey Dreams',
    projectDescription: 'Clode landing page, train coding',
    projectDate: 'May 25, 2021 3:29PM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js, jquery, bootstrap',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/honeydreams/',
  },
  {
    dataCategory: 'web',
    imgSrc: './img/portfolio/thumb/project-4.jpg',
    dataScreenshots:
      'img/portfolio/large/project-4/1.jpg,img/portfolio/large/project-4/2.jpg,img/portfolio/large/project-4/3.jpg',
    projectTitle: 'Custom Cursor',
    projectDescription: 'Clone web page, train coding',
    projectDate: 'Jan 29, 2021 4:55PM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js, jquery',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/custom-cursor',
  },
  {
    dataCategory: 'web',
    imgSrc: './img/portfolio/thumb/project-7.jpg',
    dataScreenshots:
      'img/portfolio/large/project-7/1.jpg,img/portfolio/large/project-7/2.jpg,img/portfolio/large/project-7/3.jpg,img/portfolio/large/project-7/4.jpg',
    projectTitle: 'Travel',
    projectDescription: 'Clone web page, train coding',
    projectDate: 'Jun 10, 2021 9:46PM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js, jquery',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/travel/',
  },
  {
    dataCategory: 'landing-page',
    imgSrc: './img/portfolio/thumb/project-11.png',
    dataScreenshots:
      'img/portfolio/large/project-11/1.png,img/portfolio/large/project-11/2.png',
    projectTitle: 'Foody',
    projectDescription: 'Clone landing page, train coding',
    projectDate: 'Jul 1, 2021 10:46AM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/foody/',
  },
  {
    dataCategory: 'web',
    imgSrc: './img/portfolio/thumb/project-12.png',
    dataScreenshots:
      'img/portfolio/large/project-12/1.png,img/portfolio/large/project-12/2.png,img/portfolio/large/project-12/3.png',
    projectTitle: 'Headphone',
    projectDescription: 'Clone web page, train coding',
    projectDate: 'Jul 6, 2021 4:46AM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/headphoneshop/',
  },
  {
    dataCategory: 'landing-page',
    imgSrc: './img/portfolio/thumb/project-14.png',
    dataScreenshots: 'img/portfolio/large/project-14/1.png',
    projectTitle: 'Blogger Travels',
    projectDescription: 'Clone template, train coding',
    projectDate: 'Jul 21, 2021 10:25AM GMT+7',
    projectAuthor: 'Thành Nam Nguyễn',
    projectLanguage: 'html, css, js',
    projectLinkUrl: 'https://namnguyenthanhwork.github.io/blogger-travel/',
  },
];

let projects_list = document.querySelector('#project-list');
renderProjects = (projects) => {
  projects.forEach(function (project) {
    let prod = `
        <!-- Portfolio item start -->
        <div class="portfolio-item col l-4 ml-4 m-6 sm-12 s-12" data-category=${project.dataCategory}>
            <div class="portfolio-item-inner outer-shadow">
                <div class="portfolio-item-img">
                    <img src=${project.imgSrc} alt=${project.projectTitle}
                        data-screenshots=${project.dataScreenshots}>
                    <!-- View project btn -->
                    <span class="view-project">View Project</span>
                </div>
                <p class="portfolio-item-title">${project.projectTitle}</p>
                <!-- Portfolio item details start -->
                <div class="portfolio-item-details">
                    <div class="row">
                        <div class="description col l-7 ml-7 m-7 sm-12 s-12">
                            <h3>Project Brief:</h3>
                            <p>${project.projectDescription}</p>
                        </div>
                        <div class="info col l-5 ml-5 m-5 sm-12 s-12">
                            <h3>Project info</h3>
                            <ul>
                                <li>
                                    <p>Date:</p>
                                    <p>${project.projectDate}</p>
                                </li>
                                <li>
                                    <p>Client:</p>
                                    <p>${project.projectAuthor}</p>
                                </li>
                                <li>
                                    <p>Tools:</p>
                                    <p>${project.projectLanguage}</p>
                                </li>
                                <li>
                                    <p>Web:</p>
                                    <p>
                                        <a href="${project.projectLinkUrl}"
                                            target="_blank">${project.projectLinkUrl}
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Portfolio item details end -->
            </div>
        </div>
        <!-- Portfolio item end -->
`;
    projects_list.insertAdjacentHTML('beforeend', prod);
  });
};
renderProjects(projects);
