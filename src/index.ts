import createFastify from "fastify";
import { TypeBoxValidatorCompiler } from "@fastify/type-provider-typebox";
import plugin from "./plugin.js";

import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

export async function main(): Promise<void> {
  const app = createFastify()
    .setValidatorCompiler(TypeBoxValidatorCompiler)
    .withTypeProvider<TypeBoxTypeProvider>();
  await app.register(plugin);
  app.listen({ port: 8080 });
}

main();
