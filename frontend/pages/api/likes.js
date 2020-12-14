import getDB from 'libs/db'
import validate from 'libs/validate'

const properties = {
	index: { type: "integer" }
}

const schema = { properties, required: ["index"] }

export default async (req, res) => {
	const ip = req.headers['x-real-ip'] || req.connection.remoteAddress
	const db = await getDB('likes')
	const voteDB = await getDB('votes')

	try{
		if(req.method === 'POST'){
			if(!validate(req, res, schema)) return

			await db.insertOne({ip, index: req.body.index})
			await voteDB.updateOne({index: req.body.index}, { $inc: { likes: 1 }})
			res.json({count: 1})
		}

		if(req.method === 'DELETE'){
			if(!validate(req, res, schema)) return

			const resp = await db.deleteOne({ip, index: req.body.index})
			await voteDB.updateOne({index: req.body.index}, { $inc: { likes: -1 }})

			res.json({count: resp.deletedCount})
		}

	}catch(e){
		res.json({error: 'exist'})
	}
}