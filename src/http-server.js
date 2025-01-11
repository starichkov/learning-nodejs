import {createServer} from 'node:http';

const HOST = '127.0.0.1';
const PORT = 3000;

/**
 * Represents an HTTP server instance.
 * The server is created using the `createServer` method, which listens for incoming HTTP requests
 * and responds with a plain text message "Hello World".
 *
 * The server is configured to:
 * - Set the HTTP response status code to 200 (OK).
 * - Set the `Content-Type` header to `text/plain`.
 * - Respond with the message "Hello World" in the body of the response to any incoming requests.
 *
 * Use this server for testing or simple HTTP handling scenarios.
 */
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
