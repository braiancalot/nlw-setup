import { TouchableOpacity, Dimensions } from "react-native";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = 32 * 2;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  (Dimensions.get("screen").width -
    SCREEN_HORIZONTAL_PADDING -
    DAY_MARGIN_BETWEEN * WEEK_DAYS) /
  WEEK_DAYS;

export function HabitDay() {
  return (
    <TouchableOpacity
      className="bg-zinc-900 border-2 border-zinc-800 rounded-lg m-1"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
    />
  );
}
