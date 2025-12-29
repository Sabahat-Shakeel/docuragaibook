export async function sendMessageToChatbot(baseUrl, message, sessionId, pageUrl) {
    try {
        const response = await fetch(`${baseUrl}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                session_id: sessionId, 
                context_url: pageUrl   
            }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
}