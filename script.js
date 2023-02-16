// getElementByIds & querySelectors
const nameEl = document.getElementById("customer-name")
const jobEl = document.getElementById("customer-job")
const descriptionEl = document.getElementById("customer-description")
const imgEl = document.getElementById("customer-img")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

// Customer Reviews stored in Objects
const customerReviewsArray = [
    {
        customerId: 1,
        customerName: "Geraldine Scott",
        customerJob: "Travel Guide",
        customerDescription: "I accidently selected the wrong date for my Birthday Cake delivery, and they changed the date and delivered a quality cake that made a special day that much more so! I could not speak higher of this truly fantastic company! Thank you guys!!!",
        customerImg: "customer_1.jpg",
    }, 
    {
        customerId: 2,
        customerName: "Stacey Earnhart",
        customerJob: "Nanny",
        customerDescription: "I wanted to buy something different for my friend for her birthday 🎂🥳 I chose a carrot cake. She ate the lot in 2 days with the help of her husband. I will definitely be purchasing from here again!",
        customerImg: "customer_2.jpg",
    },
    {
        customerId: 3,
        customerName: "Jessica Jakson",
        customerJob: "School Teacher",
        customerDescription: "This service is spectacular! I would 100% come back to purchase more!! Beautiful cake, Excellent customer service, very well packaged and delivered on time!",
        customerImg: "customer_3.jpg",
    }
]   

let currentItemId = 1
// EventListener to link Objects to Webpage
window.addEventListener("DOMContentLoaded", function() {
    getPerson(currentItemId)
})

// Function to link Objects to Webpage
function getPerson(i) {
    let firstItem = customerReviewsArray[i]
    nameEl.textContent = customerReviewsArray[i].customerName + ", "
    jobEl.textContent = customerReviewsArray[i].customerJob
    descriptionEl.textContent = customerReviewsArray[i].customerDescription
    imgEl.src = customerReviewsArray[i].customerImg
}

// EventListener for prev/next buttons
prevBtn.addEventListener("click", function(){
    currentItemId -= 1
    if (currentItemId < 0) {
        currentItemId = customerReviewsArray.length - 1
    }
    getPerson(currentItemId)
})

nextBtn.addEventListener("click", function() {
    currentItemId += 1
    if (currentItemId > customerReviewsArray.length - 1) {
        currentItemId = 0
    }
    getPerson(currentItemId)
})


