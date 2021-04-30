import axios from "axios";

async function contactFormSend(contact) {
  return axios({
    method: "post",
    url: "/contact",
    data: contact,
  })
    .then(function (res) {})
    .catch(function (err) {
      // console.log(err);
      console.log("respond with try again");
    });
}

export const API = {
  contactFormSend,
};
