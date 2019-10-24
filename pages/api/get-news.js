import response from './_api-data.js'
import Cors from 'micro-cors'

function handler(req, res) {
  res.status(200).json(response)
}

export default Cors()(handler)
