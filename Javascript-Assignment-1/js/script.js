/* JSON Promise to fetch user data */

async function getJSONData() {
    const requestURL = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
    const request = new Request(requestURL);
    const response = await fetch(request);
    var userData = await response.json();
    return userData;
}

var userItems = [];

/* Method to get the returned value from promise */

getJSONData().then(data => {
    data.map((values) => {
        userItems.push(values);
    });
    userList(userItems);
    userSelectedData(0);
});

/* Function to create user list on left side */
function userList(userData) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    var rowHtml = "";
    for (var i = 0; i < userData.length; i++) {
        rowHtml = `<tr id="${userData[i].id}" onclick=userSelectedData(${i})>
            <td id="first_name">${userData[i].first_name}</td>
            <td id="last_name">${userData[i].last_name}</td>
            <td id="user_name">${userData[i].username}</td>
            <td id="user_employment">${userData[i].employment.title}</td>
            <td id="user_country">${userData[i].address.country}</td>
            <td id="user_action"><a onclick=deleteData(${userData[i].id}) class="user-delete-icon"><i class="fa fa-trash icon"></i></a></td>
            </tr>`;
        tableBody.innerHTML += rowHtml;
    }
}

/* Function to get the time of the day */
function getTimeOfDay() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        return 'Good Morning';
    } else if (curHr < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

/* Function to display data of user on right side! */
function userSelectedData(userObj) {
    document.getElementById("greeting_user").innerHTML = getTimeOfDay() + ' ' + userItems[userObj]["first_name"];
    document.getElementById("user_avatar").setAttribute("src", userItems[userObj]["avatar"]);
    document.getElementById("unique_id").innerHTML = "Id: " + userItems[userObj]["id"];
    document.getElementById("user_id").innerHTML = "User Id: " + userItems[userObj]["uid"];
    document.getElementById("user_password").innerHTML = "User Password: " + userItems[userObj]["password"];
    document.getElementById("user_social_no").innerHTML = "Social Insurance Number: " + userItems[userObj]["social_insurance_number"];
    document.getElementById("user_name").innerHTML = "User Name: " + userItems[userObj]["username"];
    document.getElementById("full_name").innerHTML = userItems[userObj]["first_name"] + ' ' + userItems[userObj]["last_name"];
    document.getElementById("user_email").innerHTML = userItems[userObj]["email"];
    document.getElementById("user_dob").innerHTML = userItems[userObj]["date_of_birth"];
    document.getElementById("user_gender").innerHTML = userItems[userObj]["gender"];
    document.getElementById("user_contact").innerHTML = userItems[userObj]["phone_number"];
    document.getElementById("user_address").innerHTML = userItems[userObj]["address"]["city"] + ',' + userItems[userObj]["address"]["state"] + ',' + userItems[userObj]["address"]["country"];
    document.getElementById("user_emp").innerHTML = userItems[userObj]["employment"]["title"];
    document.getElementById("user_cc").innerHTML = userItems[userObj]["credit_card"]["cc_number"];
    document.getElementById("user_subs").innerHTML = userItems[userObj]["subscription"]["status"];
    document.getElementById("subs_plan").innerHTML = "Subscription Plan: " + userItems[userObj]["subscription"]["plan"];
    document.getElementById("subs_term").innerHTML = "Subscription Term: " + userItems[userObj]["subscription"]["term"];
    document.getElementById("user_skill").innerHTML = "Skill: " + userItems[userObj]["employment"]["key_skill"];
}

/* Function to delete user item */
function deleteData(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        for (let i = 0; i < userItems.length; i++) {
            if (userItems[i].id == index) {
                var row = document.getElementById(index);
                row.parentNode.removeChild(row);
                userItems.splice(i, 1);
                alert("Record Deleted Successfully!!!");
            }
        }
        userList(userItems);
    } else {
        alert("Deletion Operation Cancelled!!!");
    }
}