function goToLogin() {
    window.location.href = "login.html";
}

function goToRegister() {
    window.location.href = "register.html";
}


function googleRegister() {
    alert("Google Registration Coming Soon");
    window.location.href = "login.html";
}




function loginUser() {
    // Temporary simulation
    alert("Login Successful!");
    
    // Ask role for demo navigation
    let role = prompt("Enter role (student / teacher) to go to dashboard");

    if(role === "teacher") {
        window.location.href = "teacher-dashboard.html";
    } else {
        window.location.href = "student-dashboard.html";
    }
}

function googleLogin() {
    alert("Google Login Coming Soon");
    // Temporary redirect to dashboard simulation
    let role = prompt("Enter role (student / teacher) to go to dashboard");
    if(role === "teacher") {
        window.location.href = "teacher-dashboard.html";
    } else {
        window.location.href = "student-dashboard.html";
    }
}





function startClass() {
    let code = Math.floor(100000 + Math.random() * 900000); // 6 digit code
    document.getElementById("classCode").innerText = code;
    alert("Class Started! Code: " + code);
}
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}





function startClass() {
    let code = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("classCode").innerText = code;
    alert("Class Started! Code: " + code);
}

// Block app
function blockApp() {
    let appName = document.getElementById("blockedAppInput").value;
    if(appName && !blockedApps.includes(appName)) {
        blockedApps.push(appName);
        let li = document.createElement("li");
        li.innerText = appName;
        document.getElementById("blockedAppsList").appendChild(li);
        document.getElementById("blockedAppInput").value = "";
    }
}

// Post announcement
function postAnnouncement() {
    let msg = document.getElementById("announcementInput").value;
    if(msg) {
        announcements.push({msg: msg, time: new Date().toLocaleTimeString()});
        let li = document.createElement("li");
        li.innerText = msg + " (" + new Date().toLocaleTimeString() + ")";
        document.getElementById("announcementList").appendChild(li);
        document.getElementById("announcementInput").value = "";
    }
}







