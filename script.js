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
        customerName: "Nana Akufo-Addo",
        customerJob: "Operations Assistant",
        customerDescription: "This service is amazing! I would definitely recommend this to my other colleagues & friends!",
        customerImg: "customer_1.jpg",
    }, 
    {
        customerId: 2,
        customerName: "Stacey Earnhart",
        customerJob: "Nanny",
        customerDescription: "This service is amazing! I would definitely recommend this to my other colleagues & friends!",
        customerImg: "customer_2.jpg",
    },
    {
        customerId: 3,
        customerName: "Jessica Efua Jakson",
        customerJob: "Secondary School Teacher",
        customerDescription: "This service is amazing! I would definitely recommend this to my other colleagues & friends!",
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
    nameEl.textContent = customerReviewsArray[i].customerName
    jobEl.textContent = customerReviewsArray[i].customerJob
    descriptionEl.textContent = customerReviewsArray[i].customerDescription
    imgEl.src = customerReviewsArray[i].customerImg
}

// EvenytListener for prev/next buttons
prevBtn.addEventListener("click", function(){
    currentItemId -= 1
    if (currentItemId < 0) {
        currentItemId = customerReviewsArray.length - 1
    }
    getPerson(currentItemId)
    console.log(currentItemId)
})

nextBtn.addEventListener("click", function() {
    currentItemId += 1
    if (currentItemId > customerReviewsArray.length - 1) {
        currentItemId = 0
    }
    getPerson(currentItemId)
    console.log(currentItemId)
})
