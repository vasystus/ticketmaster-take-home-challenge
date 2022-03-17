# 🎟️Ticketmaster take-home challenge
![Posters](https://images.unsplash.com/photo-1549499090-d7ac0cec89f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGlja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)

---

🧩**Scenario**🧩 - a fan visits an event details page, sees that there are no tickets and assumes that it’s sold out or completely unavailable, when in reality more tickets might appear in the future (for example, if a promotor releases more tickets for Ticketmaster to sell)

✅**Solution**✅ - offer fans to join a waiting list, which will allow them to be notified if more tickets become available for sale.

The **idea of the challenge** is to break requirements into separate user stories and choose one to work on.

![welcome](https://media0.giphy.com/media/Ae7SI3LoPYj8Q/giphy.gif?cid=ecf05e477kn1jij7mcydw73q26x59kob7y79m8n8cmwnolyg&rid=giphy.gif&ct=g)

---

# 🔢User stories:

1. The waiting list form is accessed from a "join the waiting list" button which renders on an event details page if it currently has no tickets available.
2. A fan can be notified via email address and/or mobile phone number.
3. A fan must be signed in to Ticketmaster in order to add themselves to the waiting list. If they’re not signed in, prompt them to sign in when they click the “join the waiting list” button.
4. Once a fan is signed in, we’ll have their email address, so we will pre-fill the email address field with it.
5. A fan can optionally add their phone number to the form;
6. If a fan adds a phone number, they should be given the option to disallow contact via email.
7. A fan should not be allowed to submit an empty form.
8. Successful submission of the form should send a POST request to the waiting list API which will return a success or error response.
9. The waiting list API should be called when the form loads, to prevent adding the fan to the waiting list multiple times. If the fan is already on the waiting list the fan  should see a message informing them of that.

---

# 🔍My Focus:

I was working on user stories #1 (creating a pop up window with the contact form accessed by the "join the waiting list" button) and  #7 (submitting the empty form is not allowed).

The website is live on GitHub pages. You can view it via [this link](https://vasystus.github.io/ticketmaster-take-home-challenge/)!

![Join us](https://c.tenor.com/TElqH4GKK-IAAAAC/hej-you-come-join.gif)
