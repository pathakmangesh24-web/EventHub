import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return {
    message: "hii poonam!",
  };
});

app.listen({ port: 5000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Server running at ${address}`);
});