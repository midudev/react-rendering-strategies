import response from './_api-data.js'

export default (req, res) => {
  res.status(200).json(response)
}
