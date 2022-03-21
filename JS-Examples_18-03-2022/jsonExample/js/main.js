async function populate() {
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    // console.log(response.status);

    const superHeroes = await response.json();
    // const superHeroes = await response.text();
    // console.log(JSON.parse(superHeroes));
    // console.log(superHeroes.members[0]["powers"])

    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const header = document.querySelector('header');
    const docHeading = document.createElement('h1');
    // For setting the text content of newly created 'h1' element
    docHeading.textContent = jsonObj["squadName"];
    header.appendChild(docHeading);

    const docSubHeading = document.createElement('p');
    docSubHeading.textContent = `Hometown : ${jsonObj['homeTown']} 
    // Formed : ${jsonObj['formed']} // Secret Base : ${jsonObj["secretBase"]}`;
    header.appendChild(docSubHeading);
}

function populateHeroes(jsonObj) {
    const section = document.querySelector('section');
    const heroes_list = jsonObj["members"];

    for (const hero of heroes_list) {
        const hero_card = document.createElement('article');
        const hero_name = document.createElement('h2');
        const secret_identity = document.createElement('p');
        const hero_age = document.createElement('p');
        const super_powers = document.createElement('p');
        const powers_list = document.createElement('ul');

        hero_name.textContent = hero.name;
        secret_identity.textContent = `Secret Identity : ${hero.secretIdentity}`;
        hero_age.textContent = `Age : ${hero.age}`;
        super_powers.textContent = "Superpowers:";

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const item = document.createElement('li');
            item.textContent = power;
            powers_list.appendChild(item);
        }

        hero_card.appendChild(hero_name);
        hero_card.appendChild(secret_identity);
        hero_card.appendChild(hero_age);
        hero_card.appendChild(super_powers);
        hero_card.appendChild(powers_list);

        section.appendChild(hero_card)
    }
}

populate();