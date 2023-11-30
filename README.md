# typebox-excessively-deep

```text
src/plugin.ts:23:5 - error TS2589: Type instantiation is excessively deep and possibly infinite.

23     app.decorate("siteConfig", siteConfig);
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in src/plugin.ts:23
```

It does not happen when `Static` instead of `StaticDecode` is used.

## Step to reproduce

```sh
npm run build
```

##
