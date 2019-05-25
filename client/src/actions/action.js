import Services from "../services/services.js";
const service = new Services()

const getAllPhonesAction = (phones) => (
  {
    type: "ALL",
    payload: phones
  }
)

export const getAllPhones = () => {
  return function (dispatch) {
    service.all().then(data => {
      dispatch(getAllPhonesAction(data))
    })
  }
}