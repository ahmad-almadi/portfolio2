"use client";

import axios from "axios";
import { type FormEvent, useState } from "react";

const DEFAULT_ERROR_MESSAGE = "Oops! Something went wrong while submitting the form.";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactModal() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);

  const resetFeedback = () => {
    if (submitState === "submitting") {
      return;
    }

    setSubmitState("idle");
    setErrorMessage(DEFAULT_ERROR_MESSAGE);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitState === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("Message") ?? "").trim(),
    };

    setSubmitState("submitting");
    setErrorMessage(DEFAULT_ERROR_MESSAGE);

    try {
      await axios.post("/api/contact", payload);

      form.reset();
      setSubmitState("success");
    } catch (error) {
      const responseError =
        axios.isAxiosError(error) &&
        typeof error.response?.data?.error === "string" &&
        error.response.data.error.trim()
          ? error.response.data.error.trim()
          : null;

      setSubmitState("error");
      setErrorMessage(
        responseError ||
          (error instanceof Error && error.message.trim()
          ? error.message.trim()
          : DEFAULT_ERROR_MESSAGE),
      );
    }
  }

  return (
    <div className="modal_wrapper" style={{ opacity: 0 }}>
      <div
        onClick={resetFeedback}
        data-click-formclose=""
        data-w-id="ee075f5d-47a8-fd52-119e-20f1723dd2f6"
        className="close_area close-modal"
      />
      <div className="modal">
        <img
          loading="lazy"
          src="https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/69087928063763f8e5773073_bouncing%20blinking%20orb.gif"
          alt="Black glossy sphere with two vertical, light blue glowing bars resembling a pause symbol."
          className="blinking_orb-form"
        />
        <div className="modal_form-block">
          <form
            onSubmit={handleSubmit}
            onInput={submitState === "error" ? resetFeedback : undefined}
            autoComplete="off"
            id="email-form"
            method="post"
            className="modal_form"
            style={{ display: submitState === "success" ? "none" : "block" }}
          >
            <div id="orbTypingModal" className="orb_text-box-modal">
              <p id="typer-modal" className="orb_text is-modal">
                Hey human, I&apos;ll deliver your message straight to Ahmad!
              </p>
            </div>
            <input
              className="modal_form-text-field w-input"
              maxLength={256}
              name="name"
              data-name="Name"
              placeholder="Name"
              type="text"
              id="name"
              autoComplete="off"
              required
              disabled={submitState === "submitting"}
            />
            <input
              className="modal_form-text-field w-input"
              maxLength={256}
              name="email"
              data-name="Email"
              placeholder="Email"
              type="email"
              id="email"
              autoComplete="off"
              required
              disabled={submitState === "submitting"}
            />
            <textarea
              id="Message"
              name="Message"
              maxLength={5000}
              data-name="Message"
              placeholder="Your Message"
              required
              autoComplete="off"
              className="modal_form-text-field is-textarea w-input"
              disabled={submitState === "submitting"}
            />
            <div className="spacer-small" />
            <div className="form_submit-button">
              <input
                type="submit"
                data-wait="....."
                className="modal_submit-button w-button"
                value=""
                disabled={submitState === "submitting"}
              />
              <div className="pulse_dot-parent">
                <div
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 1,
                  }}
                  className="pulse_dot-back"
                />
                <div className="pulse_dot-front" />
              </div>
              <div className="text-color-alternate">
                {submitState === "submitting" ? "Sending..." : "Send Transmission"}
              </div>
            </div>
          </form>
          <div
            aria-live="polite"
            className="modal_form-success-wrapper w-form-done"
            style={{ display: submitState === "success" ? "block" : "none" }}
          >
            <div>Transmission received. I&apos;ll make sure Ahmad gets it.</div>
          </div>
          <div
            aria-live="polite"
            className="modal_form-error-wrapper w-form-fail"
            style={{ display: submitState === "error" ? "block" : "none" }}
          >
            <div>{errorMessage}</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif"
          alt="Gray circle with a soft, blurred gradient edge on a transparent background."
          className="elipse1_modal"
        />
        <img
          loading="lazy"
          src="https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif"
          alt=""
          className="elipse2_modal"
        />
        <div
          onClick={resetFeedback}
          data-click-formclose=""
          data-w-id="ee075f5d-47a8-fd52-119e-20f1723dd311"
          className="modal_close-button close-modal"
        >
          <div className="close_icon w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4141 0.707031L14.9141 14.207L27.707 27L27 27.707L14.207 14.9141L1.41406 27.707L0.707031 27L13.5 14.207L0 0.707031L0.707031 0L14.207 13.5L27.707 0L28.4141 0.707031Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
