import { ReactElement } from "react";

export type OptionProps = {
  /**
   * Option content
   */
  label: string;
  /**
   * Option value
   */
  value: string;
};

export type DropdownProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Options in the dropdown
   */
  children: ReactElement<OptionProps, 'option'> | ReactElement<OptionProps, 'option'>[];
  /**
   * Whether the text is disabled
   */
  disabled?: boolean;
};
