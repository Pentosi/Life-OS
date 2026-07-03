type SpacerProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  xs: "h-2",
  sm: "h-4",
  md: "h-6",
  lg: "h-8",
  xl: "h-12",
};

export function Spacer({
  size = "md",
}: SpacerProps) {
  return <div className={sizeClasses[size]} aria-hidden="true" />;
}