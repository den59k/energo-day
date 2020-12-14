import getDB from 'libs/db'

export default async (req, res) => {

	if(req.method === 'GET'){
		const db = await getDB()

		const options = { projection: {_id: 0} }

		const photos = await db.collection('photos').find({accepted: true}, options).toArray()
		const videos = await db.collection('videos').find({accepted: true}, options).toArray()
		const messages = await db.collection('chat').find({accepted: true}, options).toArray()

		res.json({photos, videos, messages})
	}
}