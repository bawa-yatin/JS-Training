async function getJSONData() {
    const requestURL = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const userData = await response.json();
    userList(userData);
}

function userList(userData) {
    const user_details = document.querySelector("table tbody");

    for (let user = 0; user < userData.length; user++) {
        const user_data_row = document.createElement('tr');
        user_data_row.classList.add("user-data");

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

        // var firstTr = document.querySelector('.user-data');
        // firstTr.classList.add("higlight");

        user_data_row.onclick = () => {







            // user-left-info_side_data = document.querySelector(".card .user-image .user-left-info");
            // const user_full_name = document.createElement("h3");
            // user_full_name.classList.add("full-name");

            // user_full_name.textContent = userData[user]["first_name"];
            // user-left-info_side_data.appendChild(user_full_name);


        }
    }
}

function deleteUserItem(list_item) {
    if (confirm('Are you sure you want to delete this record?')) {
        list_item.closest("tr").remove();
        alert("Record Deleted Successfully!!!")
    } else {
        alert("Deletion Operation Cancelled!!!");
    }
}

getJSONData();