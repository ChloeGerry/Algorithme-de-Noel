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
        let personnWhoGiveIndex = Math.floor(Math.random() * guests.length);
        let personWhoReceiveIndex = Math.floor(Math.random() * guests.length);

        const calculPerPersonn = () => {
            if (guests[personnWhoGiveIndex].hasGiven === true || guests[personWhoReceiveIndex].hasReceive === true) {
    
            } else {
                guests[personnWhoGiveIndex].hasGiven = true;
                guests[personWhoReceiveIndex].hasReceive = true;
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

        if (guests[personnWhoGiveIndex].hasGiven === false && 
            guests[personWhoReceiveIndex].hasReceive === false &&
            personnWhoGiveIndex !== personWhoReceiveIndex) {
            calculPerPersonn();
            giftsResults.innerHTML = giftsResults.innerHTML +
            " " + guests[personnWhoGiveIndex].firstName + " offre un cadeau à " + guests[personWhoReceiveIndex].firstName + "<br />";
        }

        stop();
    }
})