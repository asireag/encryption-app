import './App.css';
import {useState} from "react";
import {encrypt} from "./utils.js";
import {encrypt2} from "./utils.js";
import {decrypt} from "./utils.js";

function App() {
    const [message, setMessage] = useState(''); // starea initiala a componentei cand se initializeaza
    const [key, setKey] = useState(''); // starea initiala a componentei cand se initializeaza
    const [encryptedMessage, setEncryptedMessage] = useState(''); // starea initiala a componentei cand se initializeaza

    const handleMessageChange = (event) => {
        let value = event.target.value;
        setMessage(value.toUpperCase());
    };

    const handleKeyChange = (event) => {
        let value = event.target.value;
        setKey(value.toUpperCase());
    };

    const handleEncryptMessage = () => {
        const encryptedMessage = encrypt2(message, key);
        setEncryptedMessage(encryptedMessage);
    };

    const handleDecryptMessage = () => {
        const decryptedMessage = decrypt(encryptedMessage, key);
        setMessage(decryptedMessage);
    };

    const handleEncryptedMessageChange = (event) => {
        let value = event.target.value;
        setEncryptedMessage(value.toUpperCase());
    };


    return (
        <div className="App">
            <label>
                Message
                <input type="text"
                       value={message}
                       onChange={handleMessageChange}/>
                      
            </label>

            <label>
                Key
                <input type="text"
                       value={key}
                       onChange={handleKeyChange}/>
            </label>

            <button onClick={handleEncryptMessage}>Encrypt</button>
            <button onClick={handleDecryptMessage}>Decrypt</button>

            <div>
                <label>
                    Encrypted message
                    <input type="text"
                           value={encryptedMessage}
                           onChange={handleEncryptedMessageChange}/>
                </label>
            </div>
        </div>
    );
}

export default App;
