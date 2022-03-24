/* JSON Promise to fetch user data */
async function getJSONData() {
    const requestURL = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
    const request = new Request(requestURL);
    const response = await fetch(request);
    var userData = await response.json();
    userList(userData);
    defaultUserSelection(userData[0]);
}

/* Function to create user list on left side */
function userList(userData) {
    const user_details = document.querySelector("table tbody");
    for (let user = 0; user < userData.length; user++) {
        let user_data_row = document.createElement('tr');
        user_data_row.setAttribute('id', `userData${user}`);
        user_data_row.setAttribute('item_key', userData[user]["id"]);

        let first_name = document.createElement('td');
        first_name.setAttribute('id', "first_name");

        let last_name = document.createElement('td');
        last_name.setAttribute('id', "last_name");

        let user_name = document.createElement('td');
        user_name.setAttribute('id', "user_name");

        let user_employment = document.createElement('td');
        user_employment.setAttribute('id', "user_employment");

        let user_country = document.createElement('td');
        user_country.setAttribute('id', "user_country");

        let user_action = document.createElement('td');
        user_action.setAttribute('id', "user_action");

        user_data_row.appendChild(first_name);
        user_data_row.appendChild(last_name);
        user_data_row.appendChild(user_name);
        user_data_row.appendChild(user_employment);
        user_data_row.appendChild(user_country);
        user_data_row.appendChild(user_action);

        user_details.appendChild(user_data_row);

        first_name.innerHTML = userData[user]["first_name"];
        last_name.innerHTML = userData[user]["last_name"];
        user_name.innerHTML = userData[user]["username"];
        user_employment.innerHTML = userData[user]["employment"]["title"];
        user_country.innerHTML = userData[user]["address"]["country"];
        user_action.innerHTML = `<a href="#" item_id=${userData[user]["id"]} class="user-delete-icon"><i class="fa fa-trash icon"></i></a>`;
        user_action.onclick = () => {
            deleteUserItem(user, userData);
        }

        user_data_row.onclick = () => {
            displayItemInfo(userData[user]);
        }
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

/* Function to display data of first user! */
function defaultUserSelection(userObj) {
    document.getElementById("greeting_user").innerHTML = getTimeOfDay() + ' ' + userObj["first_name"];
    document.getElementById("user_avatar").setAttribute("src", userObj["avatar"]);
    document.getElementById("unique_id").innerHTML = "Id: " + userObj["id"];
    document.getElementById("user_id").innerHTML = "User Id: " + userObj["uid"];
    document.getElementById("user_password").innerHTML = "User Password: " + userObj["password"];
    document.getElementById("user_social_no").innerHTML = "Social Insurance Number: " + userObj["social_insurance_number"];
    document.getElementById("user_name").innerHTML = "User Name: " + userObj["username"];
    document.getElementById("full_name").innerHTML = userObj["first_name"] + ' ' + userObj["last_name"];
    document.getElementById("user_email").innerHTML = userObj["email"];
    document.getElementById("user_dob").innerHTML = userObj["date_of_birth"];
    document.getElementById("user_gender").innerHTML = userObj["gender"];
    document.getElementById("user_contact").innerHTML = userObj["phone_number"];
    document.getElementById("user_address").innerHTML = userObj["address"]["city"] + ',' + userObj["address"]["state"] + ',' + userObj["address"]["country"];
    document.getElementById("user_emp").innerHTML = userObj["employment"]["title"];
    document.getElementById("user_cc").innerHTML = userObj["credit_card"]["cc_number"];
    document.getElementById("user_subs").innerHTML = userObj["subscription"]["status"];
    document.getElementById("subs_plan").innerHTML = "Subscription Plan: " + userObj["subscription"]["plan"];
    document.getElementById("subs_term").innerHTML = "Subscription Term: " + userObj["subscription"]["term"];
    document.getElementById("user_skill").innerHTML = "Skill: " + userObj["employment"]["key_skill"];
}

/* Function to display user information after selection */
function displayItemInfo(row_data) {
    document.getElementById("greeting_user").innerHTML = getTimeOfDay() + ' ' + row_data["first_name"];
    document.getElementById("user_avatar").setAttribute("src", row_data["avatar"]);
    document.getElementById("unique_id").innerHTML = "Id: " + row_data["id"];
    document.getElementById("user_id").innerHTML = "User Id: " + row_data["uid"];
    document.getElementById("user_password").innerHTML = "User Password: " + row_data["password"];
    document.getElementById("user_social_no").innerHTML = "Social Insurance Number: " + row_data["social_insurance_number"];
    document.getElementById("user_name").innerHTML = "User Name: " + row_data["username"];
    document.getElementById("full_name").innerHTML = row_data["first_name"] + ' ' + row_data["last_name"];
    document.getElementById("user_email").innerHTML = row_data["email"];
    document.getElementById("user_dob").innerHTML = row_data["date_of_birth"];
    document.getElementById("user_gender").innerHTML = row_data["gender"];
    document.getElementById("user_contact").innerHTML = row_data["phone_number"];
    document.getElementById("user_address").innerHTML = row_data["address"]["city"] + ',' + row_data["address"]["state"] + ',' + row_data["address"]["country"];
    document.getElementById("user_emp").innerHTML = row_data["employment"]["title"];
    document.getElementById("user_cc").innerHTML = row_data["credit_card"]["cc_number"];
    document.getElementById("user_subs").innerHTML = row_data["subscription"]["status"];
    document.getElementById("subs_plan").innerHTML = "Subscription Plan: " + row_data["subscription"]["plan"];
    document.getElementById("subs_term").innerHTML = "Subscription Term: " + row_data["subscription"]["term"];
    document.getElementById("user_skill").innerHTML = "Skill: " + row_data["employment"]["key_skill"];
}

/* Function to delete user item */
function deleteUserItem(index, udata) {
    // if (confirm("Are you sure you want to delete this record?")) {
    //     const list = document.getElementById("tableBody");
    //     if (list.hasChildNodes()) {
    //         list.removeChild(list.children[index]);
    //         udata.splice(index, 1);
    //         alert("Record Deleted Successfully!!!");
    //     }
    // } else {
    //     alert("Deletion Operation Cancelled!!!");
    // }

    var data = "";
    const list = document.getElementById("tableBody");
    list.removeChild(list.children[index]);
    udata.splice(index, 1);
    for (let i = index + 1; i < udata.length; i++) {
        if (i >= index + 1) {
            data += "<tr>";
            data += "<td>" + udata[i].first_name + "</td>";
            data += "<td>" + udata[i].last_name + "</td>";
            data += "<td>" + udata[i].username + "</td>";
            data += "<td>" + udata[i].employment.title + "</td>";
            data += "<td>" + udata[i].address.country + "</td>";
            data += `<td><a href='#' item_id=${udata[i]["id"]} class="user-delete-icon"><i class="fa fa-trash icon"></i></a></td>`
            data += "</tr>";
            userList(data);
        }
    }
    // document.getElementById("tableBody").innerHTML = data;
    // // for (let i = 0; i < udata.length; i++) {
    // //     if (i === index) {
    // //         udata.splice(index, 1);
    // //         userList(udata);
    // //     }
    // // }
}

window.onload = function main() {
    getJSONData();
}