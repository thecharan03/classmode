// TEACHER SESSION DATA
let teacherSession = {
    classStarted: false,
    classCode: null,
    attendanceCode: null,
    students: ["Alice", "Bob", "Charlie"],
    attendance: [],
    blockedApps: [],
    announcements: [],
    doubts: [],
    alerts: [],
    timetable: [
        "Monday: Math 10-11",
        "Tuesday: Science 11-12",
        "Wednesday: English 09-10",
        "Thursday: History 10-11",
        "Friday: Computer 11-12"
    ]
};

// NAVIGATION
function goToLogin() {
    window.location.href = "login.html";
}

// TABS
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

// START / END CLASS
function toggleClass() {
    const btnText = document.getElementById("classBtnText");
    if (!teacherSession.classStarted) {
        teacherSession.classStarted = true;
        teacherSession.classCode = Math.floor(100000 + Math.random()*900000);
        teacherSession.attendanceCode = Math.floor(100000 + Math.random()*900000);
        btnText.innerText = "End Class";
        document.getElementById("classCode").innerText = teacherSession.classCode;
        document.getElementById("attendanceCode").innerText = teacherSession.attendanceCode;
        alert("Class Started!\nClass Code: " + teacherSession.classCode + "\nAttendance Code: " + teacherSession.attendanceCode);

        // populate student list
        const studentUl = document.getElementById("studentList");
        studentUl.innerHTML = "";
        teacherSession.students.forEach(s => {
            let li = document.createElement("li");
            li.innerText = s;
            studentUl.appendChild(li);
        });

    } else {
        teacherSession.classStarted = false;
        teacherSession.classCode = null;
        teacherSession.attendanceCode = null;
        btnText.innerText = "Start Class";
        document.getElementById("classCode").innerText = "Not Started";
        document.getElementById("attendanceCode").innerText = "Not Generated";
        alert("Class Ended!");
    }
}

// MARK ATTENDANCE
function markAttendance(studentName, code) {
    if (teacherSession.classStarted && code == teacherSession.attendanceCode) {
        let timestamp = new Date().toLocaleTimeString();
        teacherSession.attendance.push({student: studentName, time: timestamp});
        const ul = document.getElementById("attendanceList");
        let li = document.createElement("li");
        li.innerText = `${studentName} marked attendance at ${timestamp}`;
        ul.appendChild(li);
    }
}

// BLOCK APP
function blockApp() {
    let app = document.getElementById("blockedAppInput").value.trim();
    if (app && !teacherSession.blockedApps.includes(app)) {
        teacherSession.blockedApps.push(app);
        const li = document.createElement("li");
        li.innerText = app;
        document.getElementById("blockedAppsList").appendChild(li);
        document.getElementById("blockedAppInput").value = "";
    }
}

// ALERT WHEN STUDENT USES BLOCKED APP
function addAlert(studentName, appName) {
    if (!teacherSession.classStarted) return;
    let timestamp = new Date().toLocaleTimeString();
    teacherSession.alerts.push({student: studentName, app: appName, time: timestamp});
    const li = document.createElement("li");
    li.innerText = `${studentName} used ${appName} at ${timestamp}`;
    document.getElementById("alertsList").appendChild(li);
}

// POST ANNOUNCEMENTS
function postAnnouncement() {
    let msg = document.getElementById("announcementInput").value.trim();
    if(msg) {
        let timestamp = new Date().toLocaleTimeString();
        teacherSession.announcements.push({msg: msg, time: timestamp});
        const li = document.createElement("li");
        li.innerText = msg + " (" + timestamp + ")";
        document.getElementById("announcementList").appendChild(li);
        document.getElementById("announcementInput").value = "";
    }
}

// ANONYMOUS DOUBTS
function addAnonymousDoubt(msg) {
    if(!teacherSession.classStarted) return;
    let timestamp = new Date().toLocaleTimeString();
    teacherSession.doubts.push({msg: msg, time: timestamp});
    const li = document.createElement("li");
    li.innerText = msg + " (" + timestamp + ")";
    document.getElementById("doubtsList").appendChild(li);
}
