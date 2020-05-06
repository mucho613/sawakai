/* tslint:disable */
// generated by typescript-json-validator
import { inspect } from "util";
import Ajv = require("ajv");
import GameIDNotice from "./GameIDNotice";
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: false,
  format: "fast",
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"));

export { GameIDNotice };
export const GameIDNoticeSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  defaultProperties: [],
  properties: {
    gameUserID: {
      type: "string",
    },
  },
  required: ["gameUserID"],
  type: "object",
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, "errors">;
export const isGameIDNotice = ajv.compile(
  GameIDNoticeSchema
) as ValidateFunction<GameIDNotice>;
export default function validate(value: unknown): GameIDNotice {
  if (isGameIDNotice(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isGameIDNotice.errors!.filter((e: any) => e.keyword !== "if"),
        { dataVar: "GameIDNotice" }
      ) +
        "\n\n" +
        inspect(value)
    );
  }
}
