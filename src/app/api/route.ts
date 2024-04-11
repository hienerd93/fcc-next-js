// To handle a GET request to /api
export async function GET() {
  // Do whatever you want
  return Response.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: Request) {
  try {
    const text = await request.text();
    // Process the webhook payload
    console.log(text);
  } catch (error: any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
