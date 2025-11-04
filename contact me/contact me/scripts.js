document.getElementById("contactForm").addEventListener("submit"), function (e) {
    e.preventDefault(); //Prevent the page from reloading when the user clicks "submit"
}
//collect all field values
const name = document.getElementById(name).value;
const email = document.getElementById(email).value;
const password = document.getElementById(password).values;
const phone = document.getElementById("phone").value;
const website = Document.getElementById("website").value;
const age = document.getElementById("age").values;
const dob = document.getElementById("dob").values;
const time = document.getElementById("time").values;
const color = document.getElementById("color").values;
const range = document.getElementById("range").value;
const topic = document.getElementById("topic").value;
const message = document.getElementById("message").values;

// Get selected radio
      const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

      // Get selected checkboxes
      const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
                            .map(cb => cb.value)
                            .join(", ") || "None";

      // Display everything in an alert
      alert(
        `--- CONTACT FORM DATA ---\n\n` +
        `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nPhone: ${phone}\nWebsite: ${website}\nAge: ${age}\nDate of Birth: ${dob}\nPreferred Time: ${time}\nFavorite Color: ${color}\nInterest Level: ${range}\nContact Method: ${contactMethod}\nServices Interested In: ${services}\nTopic: ${topic}\nMessage: ${message}`
      );

      // Reset the form
      this.reset();
    







