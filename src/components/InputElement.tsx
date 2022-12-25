import React, { CSSProperties } from "react";

type InputProps = {
  name: string;
  defaultValue?: string | number;
  label?: string;
  placeholder?: string;
  pattern   ?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  value?: string | number;
  id: string; //| number;
  cols?: number;
  rows?: number;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  type?:
    | "password"
    | "url"
    | "tel"
    | "text"
    | "email"
    | "date-time-locale"
    | "color"
    | "week"
    | "time"
    | "textarea";
};

const InputElement = ({ label, type, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {
        <label htmlFor={props.name} className="w-full">
          {label}
        </label>
      }
      {type === "textarea" ? (
        <textarea
          {...props}
          className={
            props.className
              ? props.className
              : `focus:border focus:border-blue-300 border-slate-400 border p-2 rounded focus:ring-0`
          }
        ></textarea>
      ) : (
        <input
          type={type === undefined ? "text" : type}
          {...props}
          className={
            props.className
              ? props.className
              : `focus:border focus:border-blue-300 border-slate-400 border p-2 rounded focus:ring-0`
          }
        />
      )}
    </div>
  );
};

export default InputElement;
