import getDB from 'libs/db'

export default async (req, res) => {

	if(req.method === 'GET'){
		const db = await getDB()
		const ip = req.headers['x-real-ip'] || req.connection.remoteAddress

		const options = { projection: {_id: 0} }

		const photos = await db.collection('photos').find({accepted: true}, options).toArray()
		const videos = await db.collection('videos').find({accepted: true}, options).toArray()
		const messages = await db.collection('chat').find({accepted: true}, options).toArray()

		const likes = await db.collection('votes').find({}, {projection: { _id: 0}}).toArray()
		const indexes = await db.collection('likes').find({ip}, { projection: { _id: 0, ip: 0 }}).toArray()

		res.json({photos, videos, messages, likes, indexes})
	}
}