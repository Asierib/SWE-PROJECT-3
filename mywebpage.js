
/*  BANNER  */

document.addEventListener("DOMContentLoaded", function() {
    const page1 = document.querySelector(".firstpage");
    const page2 = document.querySelector(".secondpage");
    const page3 = document.querySelector(".thirdpage");
    const page4 = document.querySelector(".forthpage"); 
    const menuList = document.querySelector(".menubtn");
    const buttons = menuList.getElementsByTagName("button");
    const managerButton = buttons[2];

    managerButton.addEventListener("click", function() {
      page1.style.display = "flex";
      page2.style.display = "none";
      page3.style.display = "none";
      page4.style.display = "none";
    });
});


/* 1 PAGE  */

const createbutton = function(name,btn_num){
    let textcontent = `<input type= "button" id= "${btn_num}" value="${name}" class="btn1page"> `;
    document.querySelector(".btns1").innerHTML += textcontent;

}

document.addEventListener("DOMContentLoaded", function() { document.getElementById("btn_1").addEventListener("click", function(){
     document.querySelector(".firstpage").style.display = "none"
     document.querySelector(".secondpage").style.display = "block"

});
})
/* 2 PAGE  */

const createbutton2 = function(name, odd_even, text, url){
    let textcontent = `
    <section class="button-container_${odd_even}">
        <input type="button" value="${name}" class="btn2page${odd_even}" style="background-image: url('${url}');">
        <br><h2>${name}</h2><br><p>${text}</p>
    </section>`;
    
    document.querySelector(".btns2").innerHTML += textcontent;
};




// Keep the DJ selected
let selectedDJ = null;

document.addEventListener("DOMContentLoaded", function() { 
    let headings = document.querySelectorAll(".button-container_odd h2, .button-container_even h2");

    headings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            selectedDJ = heading.textContent.trim();
            console.log("Selected DJ:", selectedDJ); 
            document.querySelector(".secondpage").style.display = "none";
            document.querySelector(".thirdpage").style.display = "block";
        });
    });
});


/* 3 PAGE  */





let schedules = {
    "DJ BLAZE": {},
    "DJ TOTOTE": {},
    "DJ LUNA": {},
    "DJ MAGNO": {}
};



document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelectorAll(".time input")

    btn.forEach(function(e){
        e.addEventListener("click", function(){
            btn.forEach(function(b){
                b.style.backgroundImage = 'url("imagess/fondoboton.png")';
                b.style.color = "white"
                

            });
            e.style.backgroundImage = 'url("imagess/fondo_hover.png")';
            e.style.color = "#333"
        })
    })
})




document.addEventListener("DOMContentLoaded", function() { 
    // Capturing the DJ Selection
    let headings = document.querySelectorAll(".button-container_odd h2, .button-container_even h2");

    headings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            selectedDJ = heading.textContent.trim();
            console.log("Selected DJ:", selectedDJ); // Debugging
            document.querySelector(".secondpage").style.display = "none";
            document.querySelector(".thirdpage").style.display = "block";
        });
    });

    // Handling Date and Time Selection
    const submitBtn = document.getElementById("submit_btn");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        const date = document.getElementById("start").value;
        const timeBtns = document.querySelectorAll(".time input");
        let selectedTime = null;

        // Find selected time slot
        timeBtns.forEach(function(btn) {
            if (btn.style.backgroundImage === 'url("imagess/fondo_hover.png")') {
                selectedTime = btn.value;
            }
        });

        if (!date || !selectedTime) {
            alert("Please select both a date and a time.");
            return;
        }

        // Check if the slot is already booked
        if (schedules[selectedDJ][date] && schedules[selectedDJ][date][selectedTime]) {
            // Show "Not available" message
            const messageDiv = document.createElement("div");
            messageDiv.textContent = "Not available. Please choose another time.";
            messageDiv.style.color = "red";
            messageDiv.style.fontSize = "12px";
            messageDiv.style.marginTop = "5px";
            submitBtn.parentElement.appendChild(messageDiv);

            // Hide the message after 5 seconds
            setTimeout(function() {
                messageDiv.style.display = "none";
            }, 5000);

            return;
        }

        // Save the date and time in the DJ's schedule
        if (!schedules[selectedDJ][date]) {
            schedules[selectedDJ][date] = {};
        }
        schedules[selectedDJ][date][selectedTime] = true;

        // Log the DJ's schedule to the console
        console.log(`${selectedDJ}'s schedule:`, schedules[selectedDJ]);

        // Show confirmation message
        const confirmationMessage = document.createElement("div");
        confirmationMessage.textContent = "Your time and date are confirmed!";
        confirmationMessage.style.color = "blue";
        confirmationMessage.style.fontSize = "14px";
        confirmationMessage.style.marginTop = "5px";
        submitBtn.parentElement.appendChild(confirmationMessage);

        // Hide the confirmation message after 3 seconds
        setTimeout(function() {
            confirmationMessage.style.display = "none";
            // Hide the current page and show the next one
            document.querySelector(".thirdpage").style.display = "none";
            document.querySelector(".forthpage").style.display = "block";
        }, 3000);
    });
});






/* 4 PAGE  */




function Song(song, artist, year, played) {
    this.song = song;
    this.artist = artist;
    this.year = year;
    this.played = played;
}


function DJ(name, songs) {
    this.name = name;
    this.songs = songs;
}


DJ.prototype.addSongsToTable = function() {
    const tbody = document.querySelector(".songstable tbody");
    tbody.innerHTML = ""; 

    this.songs.forEach(song => {
        let row = `<tr><td>${song.song}</td><td>${song.artist}</td><td>${song.year}</td><td>${song.played}</td></tr>`;
        tbody.innerHTML += row;
    });
};


const djBlaze = new DJ("DJ BLAZE", [
    new Song("Despacito", "Bad Bunny", "2017", "yes"),
    new Song("Taki Taki", "JCal", "2018", "no"),
    new Song("Baila Baila Baila", "J Balvin", "2019", "yes"),
    new Song("Vibe With Me", "Bad Bunny", "2021", "no"),
    new Song("Fire Dance", "Ozuna", "2020", "yes"),
    new Song("Stay Close", "Anuel", "2019", "no"),
    new Song("Eclipse", "J Balvin", "2022", "yes"),
    new Song("Luna", "Bad Bunny", "2020", "no"),
    new Song("Sombra", "JCal", "2021", "yes")
]);

const djTotote = new DJ("DJ TOTOTE", [
    new Song("La Modelo", "Ozuna", "2018", "no"),
    new Song("Dákiti", "Anuel", "2020", "yes"),
    new Song("Ella y Yo", "J Balvin", "2005", "no"),
    new Song("City Lights", "JCal", "2021", "yes"),
    new Song("Hasta El Amanecer", "Ozuna", "2017", "no"),
    new Song("Never Stop", "Bad Bunny", "2022", "yes"),
    new Song("Tropical Nights", "J Balvin", "2020", "no"),
    new Song("Rainfall", "Anuel", "2021", "yes"),
    new Song("Dreams", "JCal", "2021", "no")
]);

const djLuna = new DJ("DJ LUNA", [
    new Song("Con Altura", "Bad Bunny", "2019", "yes"),
    new Song("Te Boté", "JCal", "2018", "no"),
    new Song("Criminología", "Ozuna", "2020", "yes"),
    new Song("Lost in Time", "Anuel", "2021", "no"),
    new Song("Viva La Vida", "Bad Bunny", "2021", "yes"),
    new Song("Midnight Dreams", "J Balvin", "2022", "no"),
    new Song("Tropical Heat", "Ozuna", "2021", "yes"),
    new Song("Fiesta", "JCal", "2022", "no"),
    new Song("Electric Wave", "Anuel", "2021", "yes")
]);

const djMagno = new DJ("DJ MAGNO", [
    new Song("Vente Pa' Ca", "Anuel", "2017", "no"),
    new Song("Despacito", "Bad Bunny", "2017", "yes"),
    new Song("Taki Taki", "JCal", "2018", "no"),
    new Song("All Night", "Ozuna", "2020", "yes"),
    new Song("Street Lights", "J Balvin", "2019", "no"),
    new Song("Under the Stars", "Anuel", "2021", "yes"),
    new Song("Rising Sun", "Bad Bunny", "2022", "no"),
    new Song("Wild Ocean", "J Balvin", "2021", "yes"),
    new Song("Mystic World", "Ozuna", "2020", "no")
]);


const djs = {
    "DJ BLAZE": djBlaze,
    "DJ TOTOTE": djTotote,
    "DJ LUNA": djLuna,
    "DJ MAGNO": djMagno
};


document.addEventListener("DOMContentLoaded", function() {
    const selectedDJ = "DJ BLAZE"; 

    if (djs[selectedDJ]) {
        djs[selectedDJ].addSongsToTable();
    }

  
    const tableRows = document.querySelectorAll(".songstable tr");
    const imgElement = document.querySelector(".songsimg img");

    tableRows.forEach(row => {
        row.addEventListener("click", function() {
            document.getElementById("artistname").textContent = `Artist - ${row.cells[1].textContent}`;
            document.getElementById("songname").textContent = `Song - ${row.cells[0].textContent}`;
            document.getElementById("duration").textContent = `Duration - TBD`;
            document.getElementById("played").textContent = `Played - ${row.cells[3].textContent}`;

            
            const artist = row.cells[1].textContent;
            switch (artist) {
                case "J Balvin":
                    imgElement.src = "imagess/jbalvin.jpg";
                    break;
                case "Bad Bunny":
                    imgElement.src = "imagess/badbunny.jpg";
                    break;
                case "Ozuna":
                    imgElement.src = "imagess/ozuna.jpg";
                    break;
                case "Anuel":
                    imgElement.src = "imagess/anuel.jpg";
                    break;
                case "JCal":
                    imgElement.src = "imagess/jcal.jpg";
                    break;
            }
        });
    });
});

/*----------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const page1 = document.querySelector(".firstpage");
    const page2 = document.querySelector(".secondpage");
    const page3 = document.querySelector(".thirdpage");
    const page4 = document.querySelector(".forthpage"); ;
    
    const show = document.getElementById("btn_2");

    show.addEventListener("click", function() {
      page1.style.display = "none";
      page2.style.display = "none";
      page3.style.display = "none";
      page4.style.display = "block";
    });
});