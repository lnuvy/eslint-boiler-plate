import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const fontSizes: ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [string, string]
    | [
        string,
        Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
  >
> = {
  9: ["9px", { lineHeight: "normal" }],
  /** detail1 */
  12: ["12px", { lineHeight: "18px" }],
  /** body2 */
  14: ["14px", { lineHeight: "20px" }],
  /** body1 */
  16: ["16px", { lineHeight: "24px" }],
  /** title1 */
  18: ["18px", { lineHeight: "28px" }],
  /** headline4 */
  20: ["20px", { lineHeight: "32px" }],
  /** headline3 */
  24: ["24px", { lineHeight: "32px" }],
  /** headline2 */
  28: ["28px", { lineHeight: "36px" }],
  /** headline1 */
  34: ["34px", { lineHeight: "44px" }],
};

export default fontSizes;
