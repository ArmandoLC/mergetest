var jsonData = {
    "data": [
        {
            "name": "Nickole Beatrice Smith",
            "address": "398 Pleasant Pine Cir. Harrington, DE 19123",
            "email": "nicobes@gmail.com",
            "age": 45,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [
                {
                    "phone": "(302) 792-8434"
                },
                {
                    "phone": "(302) 792-1134"
                },
                {
                    "phone": "(302) 792-2234"
                },
                {
                    "phone": "(302) 792-3334"
                }
            ],
            "relatives": [
                {
                    "name": "Susan M Smith"
                },
                {
                    "name": "Malcolm W Smith"
                },
                {}
            ]
        },
        {
            "name": "Jacke Melyn Postre",
            "address": "128 Pleasant Pine Cir. Harrington, DE 48402",
            "email": "jackpost@gmail.com",
            "age": 23,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [
                {
                    "phone": "(512) 842-2124"
                }
            ],
            "relatives": [
                {
                    "name": "Jay M Postre"
                },
                {
                    "name": "May W Postre"
                }
            ]
        },
        {
            "name": "Louis K Patterson",
            "address": "333 Pleasant Pine Cir. Harrington, DE 11111",
            "email": "lpatterson@gmail.com",
            "age": 31,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [],
            "relatives": [
                {
                    "name": "Jay M Postre"
                },
                {
                    "name": "May W Postre"
                },
                {}
            ]
        },
        {
            "name": "Mickey K Mouse",
            "address": "443 Pleasant Pine Cir. Harrington, DE 12211",
            "email": "mmouse@gmail.com",
            "age": 21,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [
                {
                    "phone": "(444) 792-8434"
                },
                {
                    "phone": "(555) 792-1134"
                }
            ],
            "relatives": []
        },
        {
            "name": "Allan K Moury",
            "address": "312 Pleasant Pine Cir. Harrington, DE 11113",
            "email": "amoury@gmail.com",
            "age": 27,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [],
            "relatives": []
        }
    ]
};


function renderInfo() {
    var emailInput = document.getElementById("email").value;
    var parentDiv = document.getElementById("jsonData");
    console.log(emailInput);
    var personalInfo;

    for (var i = 0; i < jsonData.data.length; i++) {
        if (jsonData.data[i].email == emailInput) {
            personalInfo = jsonData.data[i];
        }
        else {
            console.log('NO COINCIDE');
        }
    }

    if (personalInfo) {
        console.log('Correct Email Input');

        var name = document.createElement('p');
        var address = document.createElement('p');
        var email = document.createElement('p');
        var age = document.createElement('p');
        var notes = document.createElement('p');
        var phoneNumbers = document.createElement('ul');
        var relatives = document.createElement('ul');

        name.textContent = personalInfo.name;
        address.textContent = personalInfo.address;
        email.textContent = personalInfo.email;
        age.textContent = personalInfo.age;
        notes.textContent = personalInfo.notes;

        for (var j = 0; j < personalInfo.phoneNumbers.length; j++) {
            var phoneItem = document.createElement('li');
            phoneItem.textContent = personalInfo.phoneNumbers[j].phone;
            phoneNumbers.appendChild(phoneItem);
        }

        for (var j = 0; j < personalInfo.relatives.length; j++) {
            var relativeItem = document.createElement('li');
            relativeItem.textContent = personalInfo.relatives[j].name;
            relatives.appendChild(relativeItem);
        }

        parentDiv.appendChild(name);
        parentDiv.appendChild(address);
        parentDiv.appendChild(email);
        parentDiv.appendChild(age);
        parentDiv.appendChild(notes);

        parentDiv.appendChild(phoneNumbers);
        parentDiv.appendChild(relatives);
    }
    else {
        console.log('Invalid Email Input');
        var invalidInfo = document.createElement('p');
        invalidInfo.textContent = 'Invalid Email';

        parentDiv.appendChild(invalidInfo);
    }

}
