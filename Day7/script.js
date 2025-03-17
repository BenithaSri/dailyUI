const profile = document.getElementById("profile");
const security = document.getElementById("security");
const logout = document.getElementById("logout");
const help = document.getElementById("help");

let containerH2 = document.querySelector(".body-container h2")

// Style the container h2
containerH2.style.fontSize = "40px";
containerH2.style.fontWeight = "bold";
containerH2.style.marginBottom = "20px";
containerH2.style.color = "#333";


// Profile settings form
let profileForm = document.createElement("form");
profileForm.setAttribute("class", "profile-form");

// Create div for profile pictiure in the form
let profilePictureDiv = document.createElement("div");
profilePictureDiv.setAttribute("class", "profile-picture");

//creating image element for the profile picture
let profilePicture = document.createElement("img");
profilePicture.setAttribute("src", "images/profile-picture.avif");
profilePicture.setAttribute("alt", "Profile Picture");

//Style the image
profilePicture.style.width = "200px";
profilePicture.style.height = "200px";
profilePicture.style.borderRadius = "50%";
profilePicture.style.objectFit = "cover";

//Edit profile picture
let editProfilePicture = document.createElement("input");
editProfilePicture.setAttribute("type", "file");
editProfilePicture.setAttribute("accept", "image/*");
editProfilePicture.setAttribute("id", "profile-picture");

//style the edit profile picture
editProfilePicture.style.margin = "10px 0";
editProfilePicture.style.padding = "12px";
editProfilePicture.style.fontSize = "16px";

// Create input fields
let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Username");
nameInput.setAttribute("id", "name");

let emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "example@email.com");
emailInput.setAttribute("id", "email");

let passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("id", "password");

let confirmPasswordInput = document.createElement("input");
confirmPasswordInput.setAttribute("type", "password");
confirmPasswordInput.setAttribute("placeholder", "Confirm Password");
confirmPasswordInput.setAttribute("id", "confirm-password");

let phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "tel");
phoneInput.setAttribute("placeholder", "Phone Number");
phoneInput.setAttribute("id", "phone");

// Create save button
let saveButton = document.createElement("button");
saveButton.setAttribute("type", "submit");
saveButton.setAttribute("class", "save-button");
saveButton.innerHTML = "Save";

// Center form on screen
profileForm.style.position = "absolute";
profileForm.style.top = "50%";
profileForm.style.left = "50%";
profileForm.style.transform = "translate(-50%, -50%)";
profileForm.style.display = "flex";
profileForm.style.flexDirection = "column";
profileForm.style.alignItems = "center";
profileForm.style.width = "320px";
profileForm.style.padding = "20px";


// Style input fields
const inputFields = [nameInput, emailInput, passwordInput, confirmPasswordInput, phoneInput, saveButton];
inputFields.forEach((input) => {
    input.style.margin = "10px 0";
    input.style.padding = "12px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
    input.style.width = "90%"; // Adjust width for padding
    input.style.fontSize = "16px";
});

// Style save button
saveButton.style.margin = "10px 0";
saveButton.style.padding = "12px";
saveButton.style.border = "none";
saveButton.style.borderRadius = "5px";
saveButton.style.backgroundColor = "#007bff";
saveButton.style.color = "white";
saveButton.style.fontSize = "16px";
saveButton.style.cursor = "pointer";
saveButton.style.width = "100%";

// Button hover effect
saveButton.addEventListener("mouseover", () => {
    saveButton.style.backgroundColor = "#0056b3";
});
saveButton.addEventListener("mouseout", () => {
    saveButton.style.backgroundColor = "#007bff";
});

// Append elements to form
profilePictureDiv.appendChild(profilePicture);
profileForm.appendChild(profilePictureDiv);
profileForm.appendChild(editProfilePicture);
profileForm.appendChild(nameInput);
profileForm.appendChild(emailInput);
profileForm.appendChild(phoneInput);


//security settings form
let securityForm = document.createElement("form");
securityForm.setAttribute("class", "security-form");


//style the form
securityForm.style.position = "absolute";
securityForm.style.top = "50%";
securityForm.style.left = "50%";
securityForm.style.transform = "translate(-50%, -50%)";
securityForm.style.display = "flex";
securityForm.style.flexDirection = "column";
securityForm.style.alignItems = "center";
securityForm.style.width = "320px";
securityForm.style.gap = "10px";

//forgot password
let forgotPassword = document.createElement("a");
forgotPassword.setAttribute("href", "#");
forgotPassword.innerHTML = "Forgot Password?";
forgotPassword.style.color = "#007bff";
forgotPassword.style.textDecoration = "none";

//two factor authentication
let twoFactorAuthentication = document.createElement("a");
twoFactorAuthentication.setAttribute("href", "#");
twoFactorAuthentication.innerHTML = "Want to enable two factor authentication?";
twoFactorAuthentication.style.color = "#007bff";
twoFactorAuthentication.style.textDecoration = "none";


securityForm.appendChild(passwordInput);
securityForm.appendChild(confirmPasswordInput);
securityForm.appendChild(saveButton);
securityForm.appendChild(forgotPassword);

// Function to hide the form
function hideForm() {
    if (profileForm.parentNode) {
        profileForm.parentNode.removeChild(profileForm);
    }
}
function hideSecurityForm() {
    if (securityForm.parentNode) {
        securityForm.parentNode.removeChild(securityForm);
    }
}


//Logout button
let button = document.createElement("button");
button.setAttribute("class", "logout-button");
button.innerHTML = "Logout";

// Apply styles
button.style.position = "absolute";
button.style.top = "50%";
button.style.left = "55%";
button.style.borderRadius = "5px";
button.style.border = "none";
button.style.backgroundColor = "#007bff";
button.style.height = "40px";
button.style.width = "100px";
button.style.color = "white";
button.style.cursor = "pointer";

//create an h2 element
   let pLogpage = document.createElement("h2");
   pLogpage.innerHTML = "Once you logout, you will be redirected to the login page.";

// Add event listener
button.addEventListener("click", () => {
    window.location.href = "main.html";
});


// Function to hide the logout button
function hideLogoutButton() {
    if (button.parentNode) {
        button.parentNode.removeChild(button);
    }
}
// Function to hide the logout message
function hideLogoutMessage() {
    const logoutMessage = document.querySelector(".logout-message");
    if (logoutMessage) {
        logoutMessage.remove();
    }
}

//Hide help content
function hideHelpContent() {
    const helpContent = document.querySelector(".help-content");
    if (helpContent) {
        helpContent.remove();
    }
}
// Event listeners for each navigation button

document.addEventListener("DOMContentLoaded", () => {
    profilePage();
});

function profilePage() {

    containerH2.innerHTML = "Profile👤";
    profileForm.appendChild(saveButton);
    hideLogoutMessage()
    hideSecurityForm()
    hideLogoutButton();
    hideHelpContent()

    if (!document.querySelector(".profile-form")) {
        document.querySelector(".body-container").appendChild(profileForm);
    }
    profileForm.style.display = "block";

}

function securityPage() {
    document.querySelector(".body-container h2").innerHTML = "Security🔐";
    securityForm.appendChild(twoFactorAuthentication);
    document.querySelector(".body-container").appendChild(securityForm);
    hideLogoutButton();
    hideForm();
    hideLogoutMessage();
    hideHelpContent();
}

function logoutPage() {
    document.querySelector(".body-container h2").innerHTML = "Logout🏃🏽";

    // Hide the other forms and elements
    hideForm();
    hideLogoutButton();
    hideSecurityForm();
    hideHelpContent();
    // Ensure the button is only added once
    if (!document.querySelector(".logout-button")) {
        document.querySelector(".body-container").appendChild(button);
    }
    button.style.display = "block"; 

    // Check if the pLogpage already exists, if not, create and append it
    if (!document.querySelector(".logout-message")) {
        let pLogpage = document.createElement("p");
        pLogpage.setAttribute("class", "logout-message");
        pLogpage.innerHTML = "Once you logout, you will be redirected to the login page.";
        
        // Style the paragraph
        pLogpage.style.fontSize = "30px";
        pLogpage.style.textAlign = "center";
        pLogpage.style.marginTop = "200px";
        pLogpage.style.color = "maroon";
        
        document.querySelector(".body-container").appendChild(pLogpage);
    }
}


function helpPage() {
    // Change the heading to indicate Help section
    document.querySelector(".body-container h2").innerHTML = "Help📞";
    
    // Hide content from other sections
    hideLogoutButton();
    hideForm();
    hideSecurityForm();
    hideLogoutMessage();
    
    // Check if the help content already exists, if so, remove it first
    const existingHelpContent = document.querySelector(".help-content");
    if (existingHelpContent) {
        existingHelpContent.remove();
    }


    // Create and append Help content
    const helpContent = document.createElement("div");
    helpContent.setAttribute("class", "help-content");
    helpContent.style.marginTop = "90px";

    // Title for Help section
    let helpTitle = document.createElement("h3");
    helpTitle.innerHTML = "How can we assist you?";
    helpTitle.style.fontSize = "24px";
    helpTitle.style.marginBottom = "20px";
    helpContent.appendChild(helpTitle);

    // Add FAQ section
    let faqTitle = document.createElement("h4");
    faqTitle.innerHTML = "Frequently Asked Questions";
    faqTitle.style.marginBottom = "10px";
    helpContent.appendChild(faqTitle);

    // FAQ items
    let faqList = document.createElement("ul");

    let faqItem1 = document.createElement("li");
    faqItem1.innerHTML = "<strong>Q:</strong> How do I reset my password?";
    let faqAnswer1 = document.createElement("p");
    faqAnswer1.innerHTML = "A: You can reset your password by clicking on 'Forgot Password?' on the login page and following the instructions.";
    faqItem1.appendChild(faqAnswer1);

    let faqItem2 = document.createElement("li");
    faqItem2.innerHTML = "<strong>Q:</strong> How do I update my profile?";
    let faqAnswer2 = document.createElement("p");
    faqAnswer2.innerHTML = "A: You can update your profile from the 'Profile' section in your settings.";
    faqItem2.appendChild(faqAnswer2);

    let faqItem3 = document.createElement("li");
    faqItem3.innerHTML = "<strong>Q:</strong> How do I enable two-factor authentication?";
    let faqAnswer3 = document.createElement("p");
    faqAnswer3.innerHTML = "A: To enable two-factor authentication, go to the 'Security' section in settings and follow the prompts.";
    faqItem3.appendChild(faqAnswer3);

    faqList.appendChild(faqItem1);
    faqList.appendChild(faqItem2);
    faqList.appendChild(faqItem3);

    helpContent.appendChild(faqList);

    // Contact Information
    let contactTitle = document.createElement("h4");
    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.marginTop = "30px";
    helpContent.appendChild(contactTitle);

    let contactInfo = document.createElement("p");
    contactInfo.innerHTML = "If you need further assistance, feel free to reach out to our support team at support@example.com or call us at 1-800-123-4567.";
    helpContent.appendChild(contactInfo);

    // Add help content to the page
    document.querySelector(".body-container").appendChild(helpContent);
}