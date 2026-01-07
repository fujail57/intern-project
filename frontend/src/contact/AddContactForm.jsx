import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";

export const AddContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/add-contact", data);

      console.log("Contact added successfully: ", response.data);
      alert("contact added successfully");
      reset(); // clear form after submition
    } catch (error) {
      console.log("Error: ", error);
      alert("contact add failed");
    }
  };

  //   return
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <input
            placeholder="Enter your name"
            type="text"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <input
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            placeholder="Enter phone number"
            type="number"
            {...register("phone", { required: true })}
          />
        </div>

        <div>
          <input
            placeholder="Enter message"
            type="text"
            {...register("message")}
          />
        </div>

        <div>
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};
