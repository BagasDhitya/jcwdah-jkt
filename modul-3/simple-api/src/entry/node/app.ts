import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 5000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const { method, url } = req;

    // set default header : untuk menjelaskan isi konten dari API ini
    res.setHeader("Content-Type", "application/json");

    // routing : menentukan alamat untuk mengakses data 'welcome to simple api'
    // contoh -> http://localhost:5000/api/welcoming
    if (method === "GET" && url === "/api/welcoming") {
      res.statusCode = 200;
      return res.end(
        JSON.stringify({
          message: "Welcome to simple api",
        }),
      );
    }

    if (method === "GET" && url === "/api/hello") {
      res.statusCode = 200;
      return res.end(
        JSON.stringify({
          message: "Hello World",
        }),
      );
    }

    // 404 not found -> kondisi ketika ada request yang tidak menemukan sourcenya
    res.statusCode = 404;
    return res.end(
      JSON.stringify({
        error: "Endpoint not found",
      }),
    );
  },
);

server.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
