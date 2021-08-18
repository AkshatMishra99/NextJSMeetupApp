// /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body;
		console.log(data);
		// const { title, description, image, address } = data;
		const client = await MongoClient.connect(
			"mongodb+srv://zedith9903:milestone0903@cluster0.bcm0h.mongodb.net/meetups?retryWrites=true&w=majority"
		);
		const db = client.db();
		const meetupsCollection = db.collection("meetups");
		const result = await meetupsCollection.insertOne(data);
		console.log(result);
		client.close();
		res.status(201).json({ message: "Meetup Inserted!" });
	}
};
export default handler;
