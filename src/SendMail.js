import React from "react";
import "./SendMail.css";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from './features/mailSlice'

function SendMail() {
  // const { register, handleSubmit, errors } = useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CancelIcon onClick={() => dispatch(closeSendMessage())} className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to?.type === "required" && (
          <p className="sendMail_error">"To field is required"</p>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject?.type === "required" && (
          <p className="sendMail_error">"Subject field is required"</p>
        )}
        <input
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message?.type === "required" && (
          <p className="sendMail_error">"Message field is required"</p>
        )}
        <div className="sendMail_options">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="sendMail_send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
