import type { HTMLAttributes, ReactNode } from "react";

export type StepperOrientation = "horizontal" | "vertical";
export type StepperState = "default" | "selected" | "checked" | "disabled";
export type StepperTone = "default" | "evergreen" | "indigo";

export interface StepperStep {
  label: ReactNode;
  description?: ReactNode;
  state?: StepperState;
  tone?: StepperTone;
  number?: ReactNode;
  backLine?: boolean;
  nextLine?: boolean;
}

export interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  steps: StepperStep[];
  currentStep: number;
  orientation?: StepperOrientation;
}

export function Stepper({ steps, currentStep, orientation = "horizontal", className, ...props }: StepperProps) {
  const classes = ["ge-stepper", `ge-stepper--${orientation}`, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...props}>
      {steps.map((step, index) => {
        const inferredState: StepperState = index < currentStep ? "checked" : index === currentStep ? "selected" : "default";
        const state = step.state ?? inferredState;
        const tone = step.tone ?? (step.state === undefined && (state === "selected" || state === "checked") ? "evergreen" : "default");
        return (
          <div key={index} className={["ge-step", `ge-step--${state}`, `ge-step--${tone}`].join(" ")}>
            {step.backLine ?? index > 0 ? <span className="ge-step__line ge-step__line--before" aria-hidden="true" /> : null}
            <div className="ge-step__pill" aria-current={state === "selected" ? "step" : undefined}>
              <span className="ge-step__marker" aria-hidden="true">
                {state === "checked" ? "✓" : step.number ?? index}
              </span>
              <span className="ge-step__copy">
                <span className="ge-step__label">{step.label}</span>
                {step.description ? <span className="ge-step__desc">{step.description}</span> : null}
              </span>
            </div>
            {step.nextLine ?? index < steps.length - 1 ? <span className="ge-step__line ge-step__line--after" aria-hidden="true" /> : null}
          </div>
        );
      })}
    </div>
  );
}
