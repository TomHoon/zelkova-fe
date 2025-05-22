export default function handler(req, res) {
    if(req.method == 'POST') {
        return 0;
    }
    return res.status(200).json('test api... ');
}