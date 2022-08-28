let theRequest = {}
let requestStatusText;
let requestRespunseText;

function requestSender(type, url, resHandeler, header = {}, body = null) {
    const req = new XMLHttpRequest();
    req.open(type, url)

    Object.keys(header).forEach((key) => {
        req.setRequestHeader(key, header[key]);
    });

    req.setRequestHeader("Content-type", "application/json");
    req.send(body)
    req.onload = () => {
        theRequest = req
        console.log(theRequest)

        switch (theRequest.status) {
            case 201:
                alert('Created')
                resHandeler()
                break;
            case 401 || 500 :
                alert(JSON.stringify(theRequest.responseText));
                break;
            case 400 :
                alert(JSON.stringify(theRequest.responseText));
                break;
            case 200:
                theRequest.data = JSON.parse(req.responseText)
            resHandeler(theRequest.data);
                break;
        
            default:
                break;
        }

    }
}

class Course {
    constructor(element) {
        const section = document.createElement('section');
        section.innerText = element.title;
        const course = conteiner.appendChild(section);

        course.onclick = () => {
            const idCourse = element._id;
            sessionStorage.setItem('idCourse', idCourse);
            window.location.href = './course-details.html';
        }
    }

}

function randerToHtml(name, tag) {
    const element = name;
    const section = document.createElement(tag);
    section.innerText = element;
    const course = conteiner.appendChild(section);
}


function courseDetails(res) {
    console.log(res.data[0]);
    if (res) {
        courseData = res.data[0]
        randerToHtml('Title: ' + courseData.title, 'h1')
        randerToHtml(
            `description: ${courseData.description}
        materialsNeeded: ${courseData.materialsNeeded}
        overallRating: ${courseData.overallRating}
        creator: ${courseData.user.fullName}
        `, 'p');



        for (const review of courseData.reviews) {
            randerToHtml(`Review
    date: ${review.postedOn}
    rating: ${review.rating}
    review: ${review.review}
    creator: ${review.user.fullName}`, 'p');
        }


        for (const step of courseData.steps) {
            randerToHtml(`Rating
        title: ${step.title}
        description: ${step.description}
        stepNumber: ${step.stepNumber}`, 'p')
        };
    }
}

function checkLogin() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
        const loginDate = new Date(user.date);
        const nowDate = new Date;
        const timePass = nowDate - loginDate;
        if (timePass > 60 * 60 * 1000) {
            logout()
        } else {
            const header = document.querySelector('#header')
            const p = document.createElement('h4');
            p.innerText = 'Welcome ' + user.fullName;
            const name = header.appendChild(p)
        }
    } else {

            location.href = './index.html'
        }
    }

function logout() {
    localStorage.setItem('user', null);

}
