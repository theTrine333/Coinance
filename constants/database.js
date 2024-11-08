const uri =
  "mongodb+srv://ericksonoluoch004:19lApZCVQIcpadb3@trine.xesqrkp.mongodb.net/?retryWrites=true&w=majority&appName=Trine";
// MongoDB Atlas Data API Configuration

const database = "Coinance";
const collection = "users"; // The collection you are working with
// Function to fetch a buyer from the MongoDB Atlas Data API
export const getBuyers = async () => {
  // Data to be sent in the request
  const data = JSON.stringify({
    collection: "Buyers",
    database: "Coinance",
    dataSource: "Trine",
    projection: {},
  });

  // Configuration for the fetch request
  const url =
    "https://ap-south-1.aws.data.mongodb-api.com/app/data-domnlkd/endpoint/data/v1/action/find";
  const apiKey =
    "T2W94RTQetAwnVyz7NJZeoMOzLV1nIPq8jVPapF66OOD97NSY63XFQpoQBMY7xPL";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": apiKey,
      },
      body: data,
    });

    // Parse the response as JSON
    const responseData = await response.json();
    return responseData.documents;
  } catch (error) {
    console.error("Error fetching buyer:", error);
  }
};

export const createBuyer = async ({
  name,
  buyRate,
  profilePic,
  walletAddress,
}) => {
  fetch(
    "https://data.mongodb-api.com/app/myapp-abcde/endpoint/data/v1/action/insertOne",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/ejson",
        Accept: "application/json",
        apiKey:
          "T2W94RTQetAwnVyz7NJZeoMOzLV1nIPq8jVPapF66OOD97NSY63XFQpoQBMY7xPL",
      },
      body: JSON.stringify({
        collection: "Buyers",
        database: "Coinance",
        dataSource: "Trine",
        document: {
          name: name,
          buyRate: buyRate,
          profilePic: profilePic,
          walletAddress: walletAddress,
        },
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
};

export const createSeller = async ({
  name,
  buyRate,
  profilePic,
  walletAddress,
}) => {
  fetch(
    "https://data.mongodb-api.com/app/myapp-abcde/endpoint/data/v1/action/insertOne",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/ejson",
        Accept: "application/json",
        apiKey:
          "T2W94RTQetAwnVyz7NJZeoMOzLV1nIPq8jVPapF66OOD97NSY63XFQpoQBMY7xPL",
      },
      body: JSON.stringify({
        collection: "Buyers",
        database: "Coinance",
        dataSource: "Trine",
        document: {
          name: name,
          buyRate: buyRate,
          profilePic: profilePic,
          walletAddress: walletAddress,
        },
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
};
