const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!",
    "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "
];

/**
 * ex. message = ABCDE  
 * encrypted = BCDEF      key = BBBBB
 * decrypted = ABCDE
 * 
 * message.split('') = [A,B,C,D,E]
 */

// varianta 1
export function encrypt(message, key) {
    if (message.length === key.length) {
        const messageCharacters = message.split('');
        const encryptedMessageChars = messageCharacters.map((msgChar, msgCharIndex) => {
            const messageCharacterIndex = characters.indexOf(msgChar);
            const keyCharacterIndex = characters.indexOf(key.charAt(msgCharIndex));

            return characters[messageCharacterIndex + keyCharacterIndex];
        });

        return encryptedMessageChars.join('');
    }

    if (key.length === 1) {
        const splitedMessage = message.split('');
        const encryptedMessageChars = splitedMessage.map((value, index) => {
            const msgCharIndex = characters.indexOf(value);
            const keyCharIndex = characters.indexOf(key);

            return characters[msgCharIndex + keyCharIndex];
        });

        return encryptedMessageChars.join('');
    }

    if (key.length < message.length) {
        const splitedMessage = message.split('');
        const encryptedMessageChars = splitedMessage.map((value, index) => {
            if (index < key.length - 1) {
                const msgCharIndex = characters.indexOf(value);
                const keyChar = key.charAt(index);
                const keyCharIndex = characters.indexOf(keyChar);

                return characters[msgCharIndex + keyCharIndex];
            } else {
                return value;
            }
        });

        return encryptedMessageChars.join('');
    }
}

// varianta 2

export function encrypt2(message, key) {
    const messageCharacters = message.split('');
    const encryptedMessageChars = messageCharacters.map((value, index) => {
        const messageCharacterIndex = characters.indexOf(value);
        let keyCharacterIndex;

        if (key.length === 1) {
            keyCharacterIndex = characters.indexOf(key);
            
            return characters[messageCharacterIndex + keyCharacterIndex];
        }

        if (message.length === key.length || key.length < message.length) {
            if (key.length < message.length && index > key.length - 1) {
                return value;
            }

            const keyChar = key.charAt(index);
            keyCharacterIndex = characters.indexOf(keyChar);
        }

        return characters[messageCharacterIndex + keyCharacterIndex];
    });

    return encryptedMessageChars.join('');
}

export function decrypt(message, key) {
    if (message.length === key.length) {
        const messageCharacters = message.split('');
        const decryptedMessageCharacters = messageCharacters.map((msgChar, msgCharIndex) => {
            const messageCharacterIndex = characters.indexOf(msgChar);
            const keyCharacterIndex = characters.indexOf(key.charAt(msgCharIndex));

            return characters[messageCharacterIndex - keyCharacterIndex];
        });

        return decryptedMessageCharacters.join('');
    }
}
