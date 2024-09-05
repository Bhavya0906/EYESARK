// Projects

const projects = [
    {
        name: '"Strategic Visibility, Unmatched Reach"',
        type: '',
        pos: 'start',
        image: './assets/Project 1.jpg' 
    },
    {
        name: '"Empowering Brands with Prime Placement"',
        type: '',
        pos: 'mid',
        image: './assets/Project 2.jpg' 
    },
    {
        name: '"Unlock Unmatched Visibility with EYESARK"',
        type: '',
        pos: 'end',
        image: './assets/Project 3.jpg'    
    },
    {
        name: '"Transforming Visibility, One Display at a Time"',
        type: '',
        pos: 'mid',
        image: './assets/Project 4.jpg' 
    },
    {
        name: '"Daily Impact, Lasting Impressions"',
        type: '',
        pos: 'end',
        image: './assets/Project 5.jpg' 
    },
    {
        name: '"Innovative Display Solutions for Brand Excellence"',
        type: '',
        pos: 'mid',
        image: './assets/Project 6.jpg' 
    },
    {
        name: '"High-Frequency Ads for Maximum Engagement"',
        type: '',
        pos: 'start',
        image: './assets/Project 7.jpg' 
    },
    {
        name: '"Every View, Every Day – Choose EYESARK"',
        type: '',
        pos: 'end',
        image: './assets/Project 8.jpg' 
    },

]

const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType)

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel);
    })

}


// Blog posts

const blogPosts = [
    {
        title: 'DAILY VISIBILITY',
        time: '',
        image: './assets/DailyVisibility.png' 
    },
    {
        title: 'PRIME LOCATIONS',
        time: '',
        image: './assets/PrimeLocations.png' 
    },
    {
        title: 'TAILORED PLANS',
        time: '',
        image: './assets/TailoredPlans.png' 
    }
]

const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;

        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        imageContainer.appendChild(image);
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection)

    })
}



export {
    createProjects,
    createBlogposts
}