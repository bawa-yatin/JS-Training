async function getJSONData() {
    const requestURL = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5"
    const request = new Request(requestURL);
    const response = await fetch(request);
    var userData = await response.json();
    userList(userData);
    defaultUserSelection(userData[0]);
}

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

function userList(userData) {
    const user_details = document.querySelector("table tbody");

    for (let user = 0; user < userData.length; user++) {
        const user_data_row = document.createElement('tr');
        user_data_row.setAttribute('id', "userData");
        user_data_row.setAttribute('item_key', userData[user]["id"]);
        user_data_row.setAttribute('ele_key', user);

        const first_name = document.createElement('td');
        first_name.classList.add("first-name");

        const last_name = document.createElement('td');
        last_name.classList.add("last-name");

        const user_name = document.createElement('td');
        user_name.classList.add("user-name");

        const user_employment = document.createElement('td');
        user_employment.classList.add("user-employment");

        const user_country = document.createElement('td');
        user_country.classList.add("user-country");

        const user_action = document.createElement('td');
        user_action.classList.add("user-action");

        first_name.textContent = userData[user]["first_name"];
        last_name.textContent = userData[user]["last_name"];
        user_name.textContent = userData[user]["username"];
        user_employment.textContent = userData[user]["employment"]["title"];
        user_country.textContent = userData[user]["address"]["country"];
        user_action.innerHTML = '<a href="#" class="user-delete-icon" onclick="deleteUserItem(this)"><i class="fa fa-trash icon"></i></a>'

        user_data_row.appendChild(first_name);
        user_data_row.appendChild(last_name);
        user_data_row.appendChild(user_name);
        user_data_row.appendChild(user_employment);
        user_data_row.appendChild(user_country);
        user_data_row.appendChild(user_action);

        user_details.appendChild(user_data_row);

        user_data_row.onclick = () => {
            displayItemInfo(user_data_row, userData[user]);
        }
    }
}


/* Function to display data of first user! */
function defaultUserSelection(userObj) {
    // console.log(document.querySelector("#userData"));
    // let first_row_element = document.querySelector("#userData");
    // first_row_element.classList.add("selected");

    // console.log(userObj)
    let user_greeting = document.getElementById("greeting_user").innerHTML = getTimeOfDay() + ' ' + userObj["first_name"];
    let user_avatar = document.getElementById("user_avatar").setAttribute("src", userObj["avatar"]);
    let unique_id = document.getElementById("unique_id").innerHTML = "Id: " + userObj["id"];
    let user_id = document.getElementById("user_id").innerHTML = "User Id: " + userObj["uid"];
    let user_password = document.getElementById("user_password").innerHTML = "User Password: " + userObj["password"];
    let user_social_no = document.getElementById("user_social_no").innerHTML = "Social Insurance Number: " + userObj["social_insurance_number"];
    let user_name = document.getElementById("user_name").innerHTML = "User Name: " + userObj["username"];
    let full_name = document.getElementById("full_name").innerHTML = userObj["first_name"] + ' ' + userObj["last_name"];
    let user_email = document.getElementById("user_email").innerHTML = userObj["email"];
    let user_dob = document.getElementById("user_dob").innerHTML = userObj["date_of_birth"];
    let user_gender = document.getElementById("user_gender").innerHTML = userObj["gender"];
    let user_contact = document.getElementById("user_contact").innerHTML = userObj["phone_number"];
    let user_address = document.getElementById("user_address").innerHTML = userObj["address"]["city"] + ',' + userObj["address"]["state"] + ',' + userObj["address"]["country"];
    let user_emp = document.getElementById("user_emp").innerHTML = userObj["employment"]["title"];
    let user_cc = document.getElementById("user_cc").innerHTML = userObj["credit_card"]["cc_number"];
    let user_subs = document.getElementById("user_subs").innerHTML = userObj["subscription"]["status"];
    let subs_plan = document.getElementById("subs_plan").innerHTML = "Subscription Plan: " + userObj["subscription"]["plan"];
}

/* Function to display user information after selection */
function displayItemInfo(list_item, row_data) {
    // console.log(document.getElementsByClassName("selected")[0]);
    // var selected_ele = document.getElementsByClassName("selected")[0]
    // selected_ele.classList.remove("selected");
    // list_item.classList.add("selected");

    let user_greeting = document.getElementById("greeting_user").innerHTML = getTimeOfDay() + ' ' + row_data["first_name"];
    let user_avatar = document.getElementById("user_avatar").setAttribute("src", row_data["avatar"]);
    let unique_id = document.getElementById("unique_id").innerHTML = "Id: " + row_data["id"];
    let user_id = document.getElementById("user_id").innerHTML = "User Id: " + row_data["uid"];
    let user_password = document.getElementById("user_password").innerHTML = "User Password: " + row_data["password"];
    let user_social_no = document.getElementById("user_social_no").innerHTML = "Social Insurance Number: " + row_data["social_insurance_number"];
    let user_name = document.getElementById("user_name").innerHTML = "User Name: " + row_data["username"];
    let full_name = document.getElementById("full_name").innerHTML = row_data["first_name"] + ' ' + row_data["last_name"];
    let user_email = document.getElementById("user_email").innerHTML = row_data["email"];
    let user_dob = document.getElementById("user_dob").innerHTML = row_data["date_of_birth"];
    let user_gender = document.getElementById("user_gender").innerHTML = row_data["gender"];
    let user_contact = document.getElementById("user_contact").innerHTML = row_data["phone_number"];
    let user_address = document.getElementById("user_address").innerHTML = row_data["address"]["city"] + ',' + row_data["address"]["state"] + ',' + row_data["address"]["country"];
    let user_emp = document.getElementById("user_emp").innerHTML = row_data["employment"]["title"];
    let user_cc = document.getElementById("user_cc").innerHTML = row_data["credit_card"]["cc_number"];
    let user_subs = document.getElementById("user_subs").innerHTML = row_data["subscription"]["status"];
    let subs_plan = document.getElementById("subs_plan").innerHTML = "Subscription Plan: " + row_data["subscription"]["plan"];
}

/* Function to delete an item */
function deleteUserItem(list_item) {
    if (confirm('Are you sure you want to delete this record?')) {
        list_item.closest("tr").remove(list_item);
        alert("Record Deleted Successfully!!!");
    } else {
        alert("Deletion Operation Cancelled!!!");
    }
}

getJSONData();