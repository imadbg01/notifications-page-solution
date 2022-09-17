const notifications = Array.from(document.querySelectorAll("[data-notification-isRead]"))
const readAllBtn = document.querySelector("#mark-all-as-read")

const notificationTracker = document.querySelector("[data-notification-tracker]")

let notificationCounter = notificationTracker.getAttribute("data-notification-tracker")


readAllBtn.addEventListener("click", markAllAsRead)

function markAllAsRead () {
    
    for (let i = 0 ; i < notifications.length; i++) {
        const isRead = notifications[i].getAttribute("data-notification-isRead")
        
        if (isRead === "false") {
            notifications[i].setAttribute("data-notification-isRead", "true")
        }
    }
    notificationCounter = "0"
    notificationTracker.setAttribute("data-notification-tracker", notificationCounter)
    notificationTracker.textContent = notificationCounter
}