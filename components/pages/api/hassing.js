// pages/api/hashing.js

import { SHA256 } from 'crypto-js';

export default function handler(req, res) {
    const { label } = req.query;

    if (!label) {
        return res.status(400).json({ error: "Label is required" });
    }

    const hashedLabel = SHA256(label).toString();
    res.status(200).json({ label, hashed: hashedLabel });
}
