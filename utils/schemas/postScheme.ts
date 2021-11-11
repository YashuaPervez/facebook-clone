import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  title: yup.string().min(3).required(),
});
