import * as yup from "yup";

export const updateProfileSchema = yup.object().shape({
  displayName: yup.string().min(3).required(),
  about: yup.string(),
  workPlace: yup.string(),
  location: yup.string(),
});
