import { SHA256 } from 'crypto-js';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const label = searchParams.get('label');

    if (!label) {
        return new Response(JSON.stringify({ error: "Label is required" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const hashedLabel = SHA256(label).toString();
    return new Response(JSON.stringify({ label, hashed: hashedLabel }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
