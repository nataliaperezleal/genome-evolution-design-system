import type { HTMLAttributes, ReactNode } from "react";

export type StepperOrientation = "horizontal" | "vertical";

export interface StepperStep {
  label: ReactNode;
  description?: ReactNode;
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
        const state = index < currentStep ? "done" : index === currentStep ? "current" : "todo";
        return (
          <div key={index} className={["ge-step", `ge-step--${state}`].join(" ")}>
            <div className="ge-step__marker" aria-hidden="true">
              {state === "done" ? "✓" : index + 1}
            </div>
            <div className="ge-step__copy">
              <div className="ge-step__label">{step.label}</div>
              {step.description ? <div className="ge-step__desc">{step.description}</div> : null}
            </div>
            {orientation === "horizontal" && index < steps.length - 1 ? <div className="ge-step__line" aria-hidden="true" /> : null}
          </div>
        );
      })}
    </div>
  );
}

