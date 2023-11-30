import fp from "fastify-plugin";
import { Value } from "@sinclair/typebox/value";

import type { FastifyInstance } from "fastify";
import type { StaticDecode, TSchema } from "@sinclair/typebox";

const name = "site-config";

async function siteConfig<T extends TSchema>(
  this: FastifyInstance,
  schema: T,
  json: string
): Promise<StaticDecode<T> | null> {
  try {
    return await Value.Decode(schema, JSON.parse(json));
  } catch (err) {
    return null;
  }
}

export default fp<never>(
  async app => {
    app.decorate("siteConfig", siteConfig);
  },
  {
    name,
    fastify: "4.x",
    decorators: { fastify: ["db"] }
  }
);

declare module "fastify" {
  export interface FastifyInstance {
    siteConfig: <T extends TSchema>(
      schema: T,
      key: string
    ) => Promise<StaticDecode<T> | null>;
  }
}
