import React, { useState } from "react";

const CaesarCipher = () => {
  const key = 3; // You can change this key to adjust the cipher shift
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);

  const caesarEncrypt = (text, shift) => {
    return text.replace(/[a-z]/gi, (char) => {
      const base = char === char.toUpperCase() ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
  };

  const caesarDecrypt = (text, shift) => {
    return caesarEncrypt(text, 26 - shift);
  };

  const handleEncrypt = () => {
    if (!inputText.trim()) return;
    const encrypted = caesarEncrypt(inputText, key);
    setOutputText(encrypted);
    setIsEncrypted(true);
  };

  const handleDecrypt = () => {
    const decrypted = caesarDecrypt(outputText, key);
    setOutputText(decrypted);
    setIsEncrypted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white  shadow-lg w-full max-w-md p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Caesar Cipher</h1>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Enter Text:</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something to encrypt..."
          />
        </div>

        <button
          onClick={handleEncrypt}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Encrypt
        </button>

        {outputText && (
          <div className="bg-gray-100 rounded-lg p-4 text-center shadow-inner">
            <p className="text-sm text-gray-500 mb-1">
              {isEncrypted ? "Encrypted Text:" : "Decrypted Text:"}
            </p>
            <p className="font-mono text-lg text-gray-800 break-words">{outputText}</p>
          </div>
        )}

        {isEncrypted && (
          <div className="text-center space-y-2">
            <p className="text-gray-600">Want to see the original text?</p>
            <button
              onClick={handleDecrypt}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
            >
              Decrypt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaesarCipher;
