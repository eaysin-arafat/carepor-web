import React from "react";

const useSetPublicKey = () => {
  const [publicKey, setPublicKey] = React.useState<string>("");
  const [isSetPublicKey, setIsSetPublicKey] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch("/public_key.txt"); // Adjust the path accordingly
        const key = await response.text();
      } catch (error) {
        console.error("Error fetching API key:", error);
      }
    };

    fetchApiKey();
  }, []);

  return {
    publicKey,
    handleSetPublicKey,
  };
};

export default useSetPublicKey;
