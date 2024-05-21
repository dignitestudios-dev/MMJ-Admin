import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => void;
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => void;
  errormessage?: string;
  inputRef?: any;
  className?: string;
  readOnly?: boolean;
};

export const InputField = (props: Props) => {
  const { label, id, errormessage } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className="text-primaryDarkGray text-[14px] capitalize"
        >
          {label}
        </label>
        <input
          {...props}
          className="border border-secondaryLightGray rounded-md py-[10px] px-[14px] outline-none"
        />
      </div>
      {!!errormessage && (
        <p className="mt-2 text-sm text-red-600 text-left pl-1">
          {errormessage}
        </p>
      )}
    </div>
  );
};