import "./App.css";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>NewChat
        </div>
      </aside>
      <section className="chatbot">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-centre">
              <div className="avatar"></div>
              <div className="message">hello there</div>
            </div>

            <div className="chatgpt">
              <div className="chat-message-centre">
                <div className="avatar"></div>
                <div className="message">Iam an AI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-input-holder">
          <textarea rows="1" className="chat-input-textarea"></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
