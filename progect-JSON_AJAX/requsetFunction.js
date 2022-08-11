function requestSender(type, url, funHandeler, header = {}, body = null) {
    const req = new XMLHttpRequest();
    req.open(type, url)

    Object.keys(header).forEach((key) => {
        req.setRequestHeader(key, header[key]);
    });

    req.setRequestHeader("Content-type", "application/json");
    req.send(body)
    req.onload = () => {
        if (req.responseText) {
            const response = JSON.parse(req.responseText);
            funHandeler(response);
        }
    }
}


class Course {
    constructor(element) {
        const div = document.createElement('div');
        div.innerText = element.title;
        const course = document.body.appendChild(div);
        course.onclick = () => {
            let idCourse =  element._id;
            localStorage.setItem('idCourse', idCourse);
            window.location.href = './course-details.html';
        }
    }

}