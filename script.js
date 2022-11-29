const buttonWrapper = document.querySelector(".button__Wrapper");
const randomGiftsButton = document.querySelector(".button__randomGifts");
const giftsResults = document.querySelector(".button__giftsResults");

const guests = [
    {
        firstName : "Dorian",
        hasGiven : false,
        hasReceived : false
    },
    {
        firstName : "Chloé",
        hasGiven : false,
        hasReceived : false
    },
    {
        firstName : "Yann",
        hasGiven : false,
        hasReceived : false
    },
    {
        firstName : "Marie",
        hasGiven : false,
        hasReceived : false
    },
    {
        firstName : "Isabelle",
        hasGiven : false,
        hasReceived : false
    },
    {
        firstName : "André",
        hasGiven : false,
        hasReceived : false
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
            guests[j].hasReceived = false;
        }
    }

    reset();

    while (!finished) {
        i++;
        let isSomeoneOutCounter = 0;
        let personnWhoGiveIndex = Math.floor(Math.random() * guests.length);
        let personWhoReceiveIndex = Math.floor(Math.random() * guests.length);
        let guestWhoGive = guests[personnWhoGiveIndex];
        let guestWhoReceive = guests[personWhoReceiveIndex];

        const updatePersonStatus = () => {
            if (guestWhoGive.hasGiven !== true && guestWhoReceive.hasReceived !== true) {
                guestWhoGive.hasGiven = true;
                guestWhoReceive.hasReceived = true;
            }
        }

        const stopLoopIfEveryoneHasReceivedGift = () => {
            let isEveryonehasReceiveddGift = true;

            for (let j = 0; j < guests.length; j++) {
                if (!guests[j].hasGiven || !guests[j].hasReceived) {
                    isEveryonehasReceiveddGift = false;
                }
            }

            for (let j = 0; j < guests.length; j++) {
                if (!guests[j].hasGiven && !guests[j].hasReceived) {
                    isSomeoneOutCounter++;
                }
            }
            
            if (isSomeoneOutCounter === 1) {
                reset();
            }

            if (isEveryonehasReceiveddGift) {
                finished = true;
            }
        }

        if (guestWhoGive.hasGiven === false && 
            guestWhoReceive.hasReceived === false &&
            personnWhoGiveIndex !== personWhoReceiveIndex) {
            updatePersonStatus();
            giftsResults.innerHTML = giftsResults.innerHTML +
            " " + guestWhoGive.firstName + " offre un cadeau à " + guestWhoReceive.firstName + "<br />";
        }

        stopLoopIfEveryoneHasReceivedGift();
    }
})