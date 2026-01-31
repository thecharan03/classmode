// NAVIGATION
function goToLogin() {
    window.location.href = "login.html";
}

// JOIN CLASS
let currentClassCode = null;

function joinClass() {
    let code = document.getElementById("joinClassCode").value.trim();
    if (code) {
        currentClassCode = code;
        document.getElementById("joinStatus").innerText = "Joined class " + code;
        document.getElementById("focusCard").style.display = "block";
        document.getElementById("doubtCard").style.display = "block";
        document.getElementById("distractionCard").style.display = "block";
    } else {
        alert("Enter a valid class code");
    }
}

// FOCUS TIMER
let timerInterval = null;
function startFocusTimer() {
    let time = 10 * 60; // 10 min
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        document.getElementById("focusTimer").innerText = `${minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
        time--;
        if (time < 0) clearInterval(timerInterval);
    }, 1000);
}

// SEND ANONYMOUS DOUBT
function sendAnonymousDoubt() {
    let doubt = document.getElementById("studentDoubtInput").value.trim();
    if (doubt) {
        // Call function from teacher dashboard to simulate backend
        if (window.opener && window.opener.addAnonymousDoubtToTeacher) {
            window.opener.addAnonymousDoubtToTeacher(doubt);
        } else {
            // fallback for single page demo
            console.log("Doubt sent:", doubt);
        }
        document.getElementById("studentDoubtInput").value = "";
        alert("Doubt sent anonymously to teacher");
    }
}

// SIMULATE DISTRACTION (TRIGGER TEACHER ALERT)
function simulateDistraction() {
    let app = document.getElementById("usedApp").value.trim();
    if(app) {
        let studentName = "Student"; // Simulated
        if (window.opener && window.opener.addAlert) {
            window.opener.addAlert(studentName, app);
        } else {
            console.log(`${studentName} used ${app}`);
        }
        document.getElementById("usedApp").value = "";
    }
}


function renderParticipation(){

 let classroom = getClass()

 if(!classroom) return

 let total = classroom.students.length

 let present = classroom.todayAttendance
   ? classroom.todayAttendance.filter(a=>a.time !== "Absent").length
   : 0

 let absent = total - present

 document.getElementById("totalStudents").innerText = total
 document.getElementById("presentStudents").innerText = present
 document.getElementById("absentStudents").innerText = absent
}
localStorage.setItem("user", JSON.stringify({
  name: "Charan Kumar",
  email: "charan@gmail.com",
  role: "Student"
}));