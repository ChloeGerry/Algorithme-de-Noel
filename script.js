const buttonWrapper = document.querySelector(".button__Wrapper");
const randomGiftsButton = document.querySelector(".button__randomGifts");
const giftsResults = document.querySelector(".button__giftsResults");

const guests = [
    {
        firstName : "Dorian",
        hasGiven : false,
        hasReceive : false
    },
    {
        firstName : "Chloé",
        hasGiven : false,
        hasReceive : false
    },
    {
        firstName : "Yann",
        hasGiven : false,
        hasReceive : false
    },
    {
        firstName : "Marie",
        hasGiven : false,
        hasReceive : false
    },
    {
        firstName : "Isabelle",
        hasGiven : false,
        hasReceive : false
    },
    {
        firstName : "André",
        hasGiven : false,
        hasReceive : false
    }
]

randomGiftsButton.addEventListener("click", () => {
    let finished = false;
    let i = 0;

    const reset = () => {
        finished = false;
        i = 0;
        giftsResults.innerHTML = "";
        for (let j = 0; j < guests.length; j++) {
            guests[j].hasGiven = false;
            guests[j].hasReceive = false;
        }
    }

    reset();

    while (!finished) {
        i++;
        let isSomeoneOutCounter = 0;
        let firstRandomNumber = Math.random() * guests.length;
        let personnWhoGive = Math.floor(firstRandomNumber);
        let secondRandomNumber = Math.random() * guests.length;
        let personWhoReceive = Math.floor(secondRandomNumber);

        const calculPerPersonn = () => {
            if (guests[personnWhoGive].hasGiven === true || guests[personWhoReceive].hasReceive === true) {
    
            } else {
                guests[personnWhoGive].hasGiven = true;
                guests[personWhoReceive].hasReceive = true;
            }
        }

        const stop = () => {
            let isEveryoneHasReceivedGift = true;

            for (let j = 0; j < guests.length; j++) {
                if (guests[j].hasGiven === false || guests[j].hasReceive === false) {
                    isEveryoneHasReceivedGift = false;
                }
            }

            for (let j = 0; j < guests.length; j++) {
                if (guests[j].hasGiven === false && guests[j].hasReceive === false) {
                    isSomeoneOutCounter++;
                }
            }
            
            if (isSomeoneOutCounter === 1) {
                reset();
            }

            if (isEveryoneHasReceivedGift) {
                finished = true;
            }
        }

        if (guests[personnWhoGive].hasGiven === false && 
            guests[personWhoReceive].hasReceive === false &&
            personnWhoGive !== personWhoReceive) {
            calculPerPersonn();
            giftsResults.innerHTML = giftsResults.innerHTML +
            " " + guests[personnWhoGive].firstName + " offre un cadeau à " + guests[personWhoReceive].firstName + "<br />";
        }

        stop();
    }
})