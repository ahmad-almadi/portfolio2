export default function Chatbot() {
  return (
    <div id="ai-chatbot" suppressHydrationWarning>
      <audio id="ai-typing-sound" loop preload="none">
        <source
          src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6932dbb2c7df7e6a52dcd5d2_Digital%20Fururistic%20Typing%20loop%202.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        id="ai-chat-button"
        aria-label="Open AI Chat"
        data-click=""
        data-click2=""
        suppressHydrationWarning
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </button>

      <div id="ai-chat-modal">
        <div className="ai-chat-container">
          <button
            className="ai-chat-close"
            aria-label="Close chat"
            data-click=""
            suppressHydrationWarning
          >
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
          </button>

          <div className="ai-chat-header">
            <img
              src="https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/692ed4bd82e7d53839c092b3_4913a40707d691e6ccd76ff3b179db0d_bouncing%20blinking%20orb%202.gif"
              alt="AI Orb"
              className="ai-chat-orb"
            />
          </div>

          <div className="ai-chat-messages" id="ai-messages">
            <div className="ai-message bot">
              <div className="ai-message-avatar bot">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <div>
                <div className="ai-message-bubble">
                  Hey human! I&apos;m your AI assistant. Ask me
                  anything about Ahmad&apos;s work, projects, or skills!
                </div>
                <div className="ai-message-time" id="initial-time" />
              </div>
            </div>

            <div className="ai-quick-questions" id="quick-questions">
              <p className="ai-quick-label">Quick questions:</p>
              <button
                className="ai-quick-btn"
                data-question="Tell me about your projects"
              >
                Tell me about your projects
              </button>
              <button
                className="ai-quick-btn"
                data-question="What are your skills?"
              >
                What are your skills?
              </button>
              <button
                className="ai-quick-btn"
                data-question="How can I contact you?"
              >
                How can I contact you?
              </button>
            </div>

            <div className="ai-typing" id="ai-typing">
              <div className="ai-message-avatar bot">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <div className="ai-typing-dots">
                <span className="ai-typing-dot" />
                <span className="ai-typing-dot" />
                <span className="ai-typing-dot" />
              </div>
            </div>
          </div>

          <div className="ai-chat-input-area">
            <form
              className="ai-chat-form"
              id="ai-chat-form"
              suppressHydrationWarning
            >
              <input
                type="text"
                id="ai-chat-input"
                className="ai-chat-input"
                placeholder="Type your message..."
                autoComplete="off"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="ai-chat-send"
                id="ai-chat-send"
                suppressHydrationWarning
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </form>
            <div className="ai-chat-footer">
              Ahmad&apos;s Portfolio AI assistant • Responses may vary
            </div>
          </div>

          <img
            src="https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.png"
            alt=""
            className="ai-ellipse top-left"
          />
          <img
            src="https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.png"
            alt=""
            className="ai-ellipse bottom-right"
          />
        </div>
      </div>
    </div>
  );
}
