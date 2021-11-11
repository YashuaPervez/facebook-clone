import * as yup from "yup";

export const updateProfileSchema = yup.object().shape({
  about: yup.string(),
  displayName: yup.string().min(3).required(),
});
