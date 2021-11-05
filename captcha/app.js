const axios = require("axios");
const Captcha = require("2captcha");

const solver = new Captcha.Solver("920af384f227fab639010daaa4c55488");

const registration = async () => {
    console.log("Solving captcha...");
    const { data } = await solver.recaptcha(
        "6Ld1UogUAAAAAJMiyy4EgAW5kxcjmUYinKsmHntR",
        "https://www.google.com/recaptcha/api2/userverify?k=6Ld1UogUAAAAAJMiyy4EgAW5kxcjmUYinKsmHntR"
    );

    try {
        let res = await axios.post("https://www.colorstreet.com/rosiesradiantnail/account/register", {
        __RequestVerificationToken: "ClHgFw9Qg2xWf2Ck4fsbt_t61bbl9qAEAbJpj_IVuGSRmYQ2FhGLRxFfP6MAx6YZa-6CEn5-gMEZqD1vLccR3hSJUfQ1",
        ReturnUrl: null,
        'Customer.FirstName': "Lady",
        'Customer.LastName': "Avocado",
        'Customer.Email': "lady@gmail.com",
        'Customer.LoginName': "LadyAvocado",
        Password: "q1u2e3e4n5",
        ConfirmPassword: "q1u2e3e4n5",
        'Customer.LanguageID.Language': 0,
        EmailNotifications: false,
        'g-recaptcha-response': data,
         Captcha: data,
        'X-Requested-With': XMLHttpRequest
        });
        console.log(res.data);
    } catch (e) {
        console.log(e);
    }
};

registration();