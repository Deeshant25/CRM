import {
  addNewContact,
  getContacts,
  getContactWithId,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    //POST Endpoint

    .post(addNewContact);

  app
    .route("/contact/:contactId")

    //get a specific contact
    .get(getContactWithId)

    //update  a specific contact
    .put(updateContact)

    //delete a specific contact
    .delete(deleteContact);
};

export default routes;
